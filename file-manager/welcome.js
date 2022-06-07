import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import closeApp from './closeApp.js'
export default function Welcome(args){
  const rl = readline.createInterface({ input, output });
  
    let name = args.slice(args.length - 1).join('').split('--username=')
    const userName = name[1]
    rl.output.write(`Welcome to the File Manager, ${userName}!` + '\n');
   
  rl.on('line', (input)=>{
    if(input.includes('.exit')){
      closeApp(userName)
        
    }
  })
  rl.on('close',()=>{
    output.write(`Thank you for using File Manager ${userName}`)
    process.exit(0)
  })
}