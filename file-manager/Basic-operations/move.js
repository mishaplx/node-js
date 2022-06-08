import fs from 'fs'
import { stdout } from 'process';
import path from 'path';
export default function moveEmulation(startDir,input){
  const newp = input.split(' ')
  const  src = newp[1]
  const dest =  newp[2]

  fs.copyFile(path.join(startDir, src),path.join(startDir, dest), (err)=>{
      if(err){
          console.log(err);
      }
      fs.unlink(path.join(startDir, src), (err)=>{
        if(err){
            console.log(err);
        }
       
    })
  })

return startDir
}