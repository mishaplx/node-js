import currentPath from './currentPath.js';
import getHomeDir from './getHomeDir.js';
import fs from "fs"
export default function cdEmulation(dir,input){

  const newp = input.split(' ')
  if(dir == null){
    const path = getHomeDir() + newp[1]
    console.log("\x1b[35m",path);
    currentPath(path)
    return path
  }
  else{
    const path = dir + newp[1]
    console.log("\x1b[35m",path);
    currentPath(path)
    return path
  }
 
}