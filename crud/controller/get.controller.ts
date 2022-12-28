import { IncomingMessage, ServerResponse } from 'http';
import * as url from 'url';
import { getAllusers, getuserById } from '../service/get.service';
import { UrlWithParsedQuery } from 'url';

export default function getResponse(
  request: IncomingMessage,
  response: ServerResponse,
): void {
  const urlRequest: UrlWithParsedQuery = url.parse(request.url, true);
  const userIdCheck = 'userId' in urlRequest.query;
  if (userIdCheck) {
    return getuserById(request, response, urlRequest);
  }
  if (!userIdCheck) {
    return getAllusers(request, response);
  }
}
