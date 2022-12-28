import { users } from '../db';
import { IncomingMessage, ServerResponse } from 'http';
import * as uuid from 'uuid';
export function getuserById(
  request: IncomingMessage,
  response: ServerResponse,
  urlRequest,
) {
  const userId: string = urlRequest.query.userId;
  const uuidValidate = uuid.validate(userId);
  if (!uuidValidate) {
    response.statusCode = 400;
    request.statusMessage = 'no valid';
    response.write(request.statusMessage);
    response.end();
    return;
  }
  const user = users.filter((item) => item.id === userId);
  if (!user.length) {
    response.statusCode = 404; // адрес не найден
    response.write('Not Found');
    response.end();
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
  urlRequest,
) {
  if (urlRequest.search == null) {
    response.end(JSON.stringify({ data: users }));
  }
}
