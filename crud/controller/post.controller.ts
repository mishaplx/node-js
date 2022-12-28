import * as querystring from 'querystring';

import { IncomingMessage, ServerResponse } from 'http';
import { badRequest } from '../service/utils';
import { addUser } from '../service/post.service';
export default function postResponse(
  request: IncomingMessage,
  response: ServerResponse,
): void {
  request.on('data', (data) => {
    const body = JSON.parse(data.toString());

    const hasName = 'username' in body;
    const hasAge = 'age' in body;
    const hasHobbies = 'hobbies' in body;
    let hasArr = [];

    hasArr.push(hasName);
    hasArr.push(hasAge);
    hasArr.push(hasHobbies);
    hasArr = hasArr.filter((item) => item == false);

    if (hasArr.length >= 1) {
      return badRequest(
        request,
        response,
        400,
        'body does not contain required fields',
      );
    }
    return addUser(request, response, body);
  });
}
