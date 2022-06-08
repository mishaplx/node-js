import currentPath from './currentPath.js';
import getHomeDir from './getHomeDir.js';
import fs from "fs"
export default function cdEmulation(startDir,input){

  const newp = input.split(' ')
    const path = startDir + newp[1]
    process.chdir(path)
    console.log("\x1b[35m",path);
    //currentPath(path)
    return path
}