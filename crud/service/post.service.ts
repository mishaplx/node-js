import { IncomingMessage, ServerResponse } from 'http';
import { users, userType } from '../db';
import { v4 as uuidv4 } from 'uuid';
export function addUser(
  request: IncomingMessage,
  response: ServerResponse,
  body: userType,
) {
  const userObj: userType = {
    id: uuidv4(),
    username: body.username,
    age: body.age,
    hobbies: body.hobbies,
  };

  users.push(userObj);
  response.statusCode = 201;

  response.end(
    JSON.stringify({
      data: userObj,
    }),
  );
}
