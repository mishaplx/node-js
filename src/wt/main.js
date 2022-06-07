
import os from 'os'
import  { Worker, workerData } from 'worker_threads'
import path from 'path'
import {fileURLToPath} from 'url';
export const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
    console.log('i am Main.js');
     const cpu = os.cpus()
    const arr =[]
    for (let i = 0; i < cpu.length; i++) {
        arr.push(
            new Promise((resolve, rejects)=>{
                
                    new Worker(path.join(__dirname,'worker.js') ,{
                        workerData: 10 + i
                     }).on('message',data=>{
                      resolve(data)
                       
                         
                     })
                
            })
        )
       

      }
      let result = await Promise.allSettled(arr)
       return result
   
};
 console.log(await performCalculations());  
