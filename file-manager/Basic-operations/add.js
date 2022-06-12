import fs from 'fs'
import { stdout } from 'process';
import currentPath from '../currentPath.js';
export default function addEmulation(startDir,input){
  const newp = input.split(' ')
  const namefile = newp[1]

  fs.writeFile(startDir + '\\' + namefile, ' ', (err) => {
    if(err) throw err;
    stdout.write('file create \n')
    currentPath(startDir)
});
return startDir
}