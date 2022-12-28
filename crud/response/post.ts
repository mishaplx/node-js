import * as querystring from 'querystring';
import { v4 as uuidv4 } from 'uuid';
import { users, userType } from '../db';
import {IncomingMessage, ServerResponse} from "http";
export default function postResponse(request:IncomingMessage, response:ServerResponse) :void{
  request.on('data', (data) => {
    const body = data;
    request.on('end', () => {
      const params = querystring.parse(body);
      const hasName = 'username' in params;
      const hasAge = 'age' in params;
      const hasHobbies = 'hobbies' in params;
      let hasArr = [];

      hasArr.push(hasName);
      hasArr.push(hasAge);
      hasArr.push(hasHobbies);

      hasArr = hasArr.filter((item) => item == false);
      if (hasArr.length >= 1) {
        response.statusCode = 400;
        response.end('bad request');
      } else {
        const arrHobbies = params.hobbies;
        // const userObj: userType = {
        //   id: uuidv4(),
        //   username: params.username,
        //   age: params.age,
        //   hobbies: arrHobbies,
        // };
        //
        // users.push(userObj);
        response.statusCode = 201;
        response.write('ok');
      }
    });
  });
}
