import url from 'url';

import * as querystring from 'querystring';
import { users, userType } from '../db';
import {IncomingMessage, ServerResponse} from "http";
export default function putResponse(request:IncomingMessage, response:ServerResponse):void {
  let body = '';
  const urlRequest = url.parse(request.url, true);
  const userId: string | string[] = urlRequest.query.userId;
  request.on('data', (data) => {
    body += data.toString();
    const params = querystring.parse(body) as unknown as userType;
    const username: string = params.username;
    const age = params.age;
    const hobbies = params.hobbies;
    users.map((item) => {
      if (item.id == userId) {
        item.username = username;
        item.age = age;
        item.hobbies = hobbies;
      }
    });
  });
}
