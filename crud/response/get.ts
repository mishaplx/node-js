import * as url from "url";
import { users } from '../db';
import {IncomingMessage, ServerResponse} from "http";
export default function getResponse(request:IncomingMessage, response:ServerResponse):void {
  const urlRequest = url.parse(request.url, true);
  const badRequest = 'userId' in urlRequest.query;
  if (urlRequest.search == null) {
    const res = JSON.stringify(users);
    response.write(res);
    response.end();
  } else if (!badRequest) {
    response.statusCode = 400;
    request.statusMessage = 'Bad request';
    response.write('Bad request');
    response.end();
  } else if (urlRequest.search !== null) {
    const user = users.filter((item) => item.id === urlRequest.query.userId);
    if (!user.length) {
      response.statusCode = 404; // адрес не найден
      response.write('Not Found');
      response.end();
    }
    const res = JSON.stringify(user);
    response.write(res);
  }
}
