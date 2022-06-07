import path from 'path'
import fs from 'fs'
import {fileURLToPath} from 'url';
import currentPath from './currentPath.js';
export default function emulatorLs(pathls){


  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
 
      
           fs.readdir(pathls, (err,data)=>{
               if(err){
                   console.log(err);
               }
               else{
                   for (let i = 0; i < data.length; i++) {
                       console.log('\x1b[31m',data[i]);
             
                   }
                   currentPath(pathls)
               }
           })

      
}