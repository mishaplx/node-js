import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import closeApp from './closeApp.js'
import currentPath from './currentPath.js';
import emulatorLs from './lsEmulator.js';
import cdEmulation from './cdEmulation.js';
import oldPath from './oldPath.js';
import invalid from './invalid.js';
import getHomeDir from './getHomeDir.js';
export default function Welcome(args){
  const rl = readline.createInterface({ input, output });
  let dir = null;
  let flag = true;
    let name = args.slice(args.length - 1).join('').split('--username=')
    const userName = name[1]
    rl.output.write(`Welcome to the File Manager, ${userName}!` + '\n');
    currentPath(getHomeDir(),'')
   rl.on('line', (input)=>{
     if(input.includes('.exit')){
       closeApp(userName) 
     }
    else if(input.includes('ls')){
      emulatorLs(dir)
     }
     else if(input.includes('cd')){
       if(flag){

         dir = cdEmulation(dir,input)
         flag = false
       }
       else{
        cdEmulation(dir,input)
       }
     }
     else{
       invalid()
     }

   })
   rl.on('close',()=>{
     output.write(`Thank you for using File Manager ${userName}`)
     process.exit(0)
   })
  
}