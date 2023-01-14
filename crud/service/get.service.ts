import { users } from '../db';
import { IncomingMessage, ServerResponse } from 'http';
import { badRequest, validateUuid } from './utils';
export function getuserById(
  request: IncomingMessage,
  response: ServerResponse,
  urlRequest,
) {
  const userId: string = urlRequest.query.userId;
  const uuidValidate = validateUuid(userId);
  if (!uuidValidate) {
    badRequest(request, response, 400, 'No valid uuid');
    return;
  }
  const user = users.filter((item) => item.id === userId);
  if (!user.length) {
    badRequest(request, response, 404, 'Not Found');
    return;
  }
  response.end(
    JSON.stringify({
      data: user,
    }),
  );
  return;
}
export function getAllusers(
  request: IncomingMessage,
  response: ServerResponse,
) {
  response.end(JSON.stringify({ data: users }));
}
