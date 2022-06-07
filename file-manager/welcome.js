import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import closeApp from './closeApp.js'
import currentPath from './currentPath.js';
import emulatorLs from './lsEmulator.js';
import cdEmulation from './cdEmulation.js';
export default function Welcome(args){
  const rl = readline.createInterface({ input, output });
  
    let name = args.slice(args.length - 1).join('').split('--username=')
    const userName = name[1]
    rl.output.write(`Welcome to the File Manager, ${userName}!` + '\n');
    currentPath(process.env.USERPROFILE,'')
   rl.on('line', (input)=>{
     if(input.includes('.exit')){
       closeApp(userName) 
     }
     if(input.includes('ls')){
      emulatorLs(process.env.USERPROFILE)
     }
     if(input.includes('cd')){
      cdEmulation(input)
     }

   })
   rl.on('close',()=>{
     output.write(`Thank you for using File Manager ${userName}`)
     process.exit(0)
   })
  
}