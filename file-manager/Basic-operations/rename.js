import fs from 'fs'
import { stdout } from 'process';
export default function renameEmulation(startDir,input){
  const newp = input.split(' ')
const  new_file_path = startDir + '/' + newp[2]
  const old_file_path = startDir + '/' + newp[1]
  fs.rename(new_file_path, old_file_path, (err) =>{
    if(err){
        console.log(err);
    }
    else{
      stdout.write('file rename \n')
    }
})
return startDir
}