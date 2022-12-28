import 'dotenv/config';
import * as http from 'http';

import postResponse from './response/post';
import putResponse from './response/put';
import deleteResponse from './response/delete';
import { IncomingMessage, ServerResponse } from 'http';
import getResponse from './controller/get.controller';
const app = http.createServer(function (
  request: IncomingMessage,
  response: ServerResponse,
): void {
  if (request.url.includes('/api/users')) {
    if (request.method == 'GET') {
      getResponse(request, response);
    } else if (request.method == 'POST') {
      postResponse(request, response);
    } else if (request.method == 'PUT') {
      putResponse(request, response);
    } else if (request.method == 'DELETE') {
      deleteResponse(request, response);
    }
  } else {
    response.statusCode = 404;
    response.end('not found');
  }
});

app.listen(process.env.PORT);
console.log(`server start ${process.env.PORT}`);
