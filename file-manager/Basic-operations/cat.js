import fs from 'fs'
import { stdout } from 'process';
export default function catEmulation(startDir,input){
  const newp = input.split(' ')
  const path = startDir + '/' + newp[1]
fs.readFile(path, (err,data)=>{
  if(err){
    console.log(err);
  }
  stdout.write(data+ '\n')
})
return startDir
}