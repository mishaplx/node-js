
import os from 'os'
import  { Worker, workerData } from 'worker_threads'
import path from 'path'

export const performCalculations = async () => {
    console.log('i am Main.js');
     const cpu = os.cpus()
    const arr =[]
    for (let i = 0; i < cpu.length; i++) {
        arr.push(
            new Promise((resolve, rejects)=>{
                
                    new Worker(path.join(path.resolve(),'worker.js') ,{
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
