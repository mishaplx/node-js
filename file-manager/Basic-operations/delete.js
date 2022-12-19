import fs from 'fs'
import path from 'path';
import currentPath from '../currentPath.js';
export default function deleteEmulation(startDir,input){
  const newp = input.split(' ')
  const  delFile = newp[1]
fs.stat(path.join(startDir, delFile),(err)=>{
  if(!err){
    fs.unlink(path.join(startDir, delFile),(err)=>{
      if(err){
          console.log(err);
      }
      currentPath(startDir)
  })
  }else{
    console.log('Operation failed');
    currentPath(startDir)
  }
})
return startDir
}