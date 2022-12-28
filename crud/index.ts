import * as http from 'http';
import getResponse from './response/get';
import postResponse from './response/post';
import putResponse from './response/put';
import deleteResponse from './response/delete';
import { IncomingMessage, ServerResponse } from 'http';

export default function createCRUD(port: string) {
  http
    .createServer(function (
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
    })
    .listen(port);
  console.log(`server start ${process.env.PORT}`);
}
