import os from 'os'
import { stdout } from 'process';
import currentPath from '../currentPath.js';
export default function osEOL(startDir, input){
  let flag = input.split(' ')[1]
  if(flag == '--EOL'){
    stdout.write(`EOL - ${os.EOL} \n`)
    currentPath(startDir)
  }
  if(flag == '--homedir'){
    stdout.write(`homedir - ${os.homedir()} \n`)
    currentPath(startDir)
  }
  if(flag == '--username'){
    stdout.write(`username - ${os.userInfo().username} \n`)
    currentPath(startDir)
  }
  if(flag == '--architecture'){
    stdout.write(`architecture - ${os.arch()} \n`)
    currentPath(startDir)
  }
  return startDir
}