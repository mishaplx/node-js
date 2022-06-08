import fs from 'fs'
import currentPath from './currentPath.js';
export default function emulatorLs(startDir){
      
        fs.readdir(startDir, (err,data)=>{
          if(data.length == 0){
            console.log('not file in dir');
          }
          if(err){
            throw new Error('dir not found')
              //console.log('dir not found');
          }
          else{
              for (let i = 0; i < data.length; i++) {
                  console.log('\x1b[31m',data[i]);
              }
              currentPath(startDir)
          }
      })

   
    
   
           

      
}