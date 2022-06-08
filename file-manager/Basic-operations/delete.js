import fs from 'fs'
import { stdout } from 'process';
import path from 'path';
export default function deleteEmulation(startDir,input){
  const newp = input.split(' ')
  const  delFile = newp[1]

  fs.unlink(path.join(startDir, delFile),(err)=>{
    if(err){
        console.log(err);
    }
})

return startDir
}