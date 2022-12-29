import { IncomingMessage, ServerResponse } from 'http';
import { deleteUser } from '../service/delete.service';
import { UrlWithParsedQuery } from 'url';
import * as url from 'url';
import { badRequest } from '../service/utils';
export default function deleteResponse(
  request: IncomingMessage,
  response: ServerResponse,
): void {
  const urlRequest: UrlWithParsedQuery = url.parse(request.url, true);
  const userIdCheck = 'userId' in urlRequest.query;
  if (userIdCheck) {
    return deleteUser(request, response);
  }
  if (!userIdCheck) {
    return badRequest(request, response, 400, 'Bad request');
  }
}
