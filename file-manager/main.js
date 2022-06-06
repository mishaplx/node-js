import {Welcome} from './index.js'
import {workerData,Worker} from 'node:worker_threads';
import path from 'path'
new Worker(path.join(path.resolve(), 'file-manager','index.js'),{
  workerData: 1
})

