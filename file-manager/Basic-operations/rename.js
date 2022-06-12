import fs from 'fs'
import { stdout } from 'process';
import currentPath from '../currentPath.js';
export default function renameEmulation(startDir,input){
  const newp = input.split(' ')
  const old_file_path = startDir + '\\' + newp[1]
const  new_file_path = startDir + '\\' + newp[2]
  fs.stat(old_file_path, (err)=>{
    if(!err){
      fs.rename(old_file_path,new_file_path, (err) =>{
        if(err){
            console.log(err);
            currentPath(startDir)
        }
        else{
          stdout.write(' file rename \n')
          currentPath(startDir)
        }
    })
    }
    else{
      console.log('Operation failed');
      currentPath(startDir)
    }
  })


return startDir
}