import { IncomingMessage, ServerResponse } from 'http';
import * as url from 'url';
import { badRequest, validateUuid } from './utils';
import { users, userType } from '../db';

export function updateUser(
  request: IncomingMessage,
  response: ServerResponse,
  data,
) {
  const body = JSON.parse(data.toString());

  const urlRequest = url.parse(request.url, true);
  const userId = urlRequest.query.userId;

  const uuidValidate = validateUuid(userId);
  if (!uuidValidate) {
    return badRequest(request, response, 400, 'No valid uuid');
  }

  const checkUser = users.filter((el) => el.id === userId);

  if (!checkUser.length) {
    return badRequest(request, response, 404, 'Not Found');
  }
  const updateUser: userType = Object.assign(checkUser[0], body);

  response.end(
    JSON.stringify({
      data: updateUser,
    }),
  );
}
