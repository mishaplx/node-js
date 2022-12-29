import { IncomingMessage, ServerResponse } from 'http';
import * as url from 'url';
import { badRequest, validateUuid } from './utils';
import { users } from '../db';

export function deleteUser(request: IncomingMessage, response: ServerResponse) {
  const urlRequest = url.parse(request.url, true);
  const userId = urlRequest.query.userId;

  const uuidValidate = validateUuid(userId);
  if (!uuidValidate) {
    return badRequest(request, response, 400, 'No valid uuid');
  }

  const arrUser = users.map((item, i) => {
    if (item.id == userId) {
      users.splice(i, 1);
    }
  });

  if (!arrUser.length) {
    return badRequest(request, response, 404, 'This user does`t exist ');
  }

  response.statusCode = 204;
  response.end(
    JSON.stringify({
      data: users,
    }),
  );
}
