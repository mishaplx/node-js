import { users } from '../db';
import * as url from "url";
import {IncomingMessage, ServerResponse} from "http";
export default function deleteResponse(request:IncomingMessage, response:ServerResponse):void {
  const urlRequest = url.parse(request.url, true);
  const userId = urlRequest.query.userId;

  const arrUser = users.map((item, i) => {
    if (item.id == userId) {
      users.splice(i, 1);
    }
  });
  if (arrUser.length == users.length) {
    console.log('404');
    response.end('404');
  }
  const res1 = JSON.stringify(arrUser);
  response.statusCode = 204;

  response.end(res1);
}
