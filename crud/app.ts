import * as dotenv from 'dotenv';
import * as http from 'http';

import postResponse from './controller/post.controller';

import { IncomingMessage, ServerResponse } from 'http';
import getResponse from './controller/get.controller';
import putResponse from './controller/put.controller';
import deleteResponse from './controller/delete.controller';
import { badRequest } from './service/utils';
export const app = http.createServer(function (
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
    badRequest(request, response, 404, 'Not found');
  }
});

app.listen(dotenv.config().parsed.PORT);
console.log(`server start ${dotenv.config().parsed.PORT}`);
