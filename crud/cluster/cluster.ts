import cluster from 'cluster';

import { cpus } from 'os';
import process from 'process';
import http, { IncomingMessage, ServerResponse } from 'http';
import getResponse from '../controller/get.controller';
import postResponse from '../controller/post.controller';
import putResponse from '../controller/put.controller';
import deleteResponse from '../controller/delete.controller';
import { badRequest } from '../service/utils';
import * as dotenv from 'dotenv';
const iObj = {
  i: 0,
};
const numCPUs = cpus().length;
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  const iObj = {
    i: 0,
  };
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
      badRequest(request, response, 404, 'Not found');
    }
  });
  iObj.i++;
  console.log(iObj.i);
  const port = dotenv.config().parsed.PORT_MULTI;

  app.listen(port);
  console.log(`app start in localhost:${port}`);

  console.log(`Worker ${process.pid} started`);
}
