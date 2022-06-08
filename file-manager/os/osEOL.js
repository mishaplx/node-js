import os from 'os'
import { stdout } from 'process';
export default function osEOL(startDir, input){
  let flag = input.split(' ')[1]
  if(flag == '--EOL'){
    stdout.write(`EOL - ${os.EOL} \n`)
  }
  if(flag == '--homedir'){
    stdout.write(`homedir - ${os.homedir()} \n`)
  }
  if(flag == '--username'){
    stdout.write(`username - ${os.userInfo().username} \n`)
  }
  if(flag == '--architecture'){
    stdout.write(`architecture - ${os.arch()} \n`)
  }
 
  return startDir
}