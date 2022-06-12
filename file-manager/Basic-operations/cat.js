import fs from 'fs'
import { stdout } from 'process';
import currentPath from '../currentPath.js';
export default function catEmulation(startDir,input){
  const newp = input.split(' ')
  const path = startDir + '\\' + newp[1]

fs.stat(path, function(err) {
  if (!err) {
    fs.readFile(path, (err,data)=>{
      if(err){
        console.log(err);
      }
      stdout.write(data+ '\n')
      currentPath(startDir)
      return startDir
    })
  }
  else if (err.code === 'ENOENT') {
      console.log("\x1b[35m",`Operation failed, no such file - ${path}`);
      currentPath(startDir)
      return startDir
  }
});
return startDir
}