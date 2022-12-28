import { IncomingMessage, ServerResponse } from 'http';
import * as url from 'url';
import { getAllusers, getuserById } from '../service/get.service';

export default function getResponse(
  request: IncomingMessage,
  response: ServerResponse,
): void {
  const urlRequest = url.parse(request.url, true);
  const userIdCheck = 'userId' in urlRequest.query;
  if (userIdCheck) {
    return getuserById(request, response, urlRequest);
  }
  if (!userIdCheck) {
    return getAllusers(request, response, urlRequest);
  }

  // response.statusCode = 400;
  // request.statusMessage = 'Bad request';
  // response.write('Bad request');
  // response.end();
}
