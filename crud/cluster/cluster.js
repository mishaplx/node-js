import cluster from 'node:cluster';

import { cpus } from 'os';
 import process from 'process';
 import createCRUD from '../index.js'
 import dotenv from 'dotenv'
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

   createCRUD(dotenv.config().parsed.PORT)

   console.log(`Worker ${process.pid} started`);
 }