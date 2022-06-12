import currentPath from './currentPath.js';
import fs from "fs"
export default function cdEmulation(startDir,input){

  const newp = input.split(' ')
    const path = startDir + '\\' + newp[1]
    fs.stat(path, function(err) {
      if (!err) {
        process.chdir(path)
        console.log("\x1b[35m",path);
        currentPath(path)
        return path
      }
      else if (err.code === 'ENOENT') {
          console.log("\x1b[35m",`Operation failed, no such file or directory - ${path}`);
          currentPath(startDir)
          return startDir
      }
  });
  return path
}