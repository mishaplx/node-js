import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import closeApp from './closeApp.js'
import currentPath from './currentPath.js';
import emulatorLs from './lsEmulator.js';
import cdEmulation from './cdEmulation.js';
import invalid from './invalid.js';
import getHomeDir from './getHomeDir.js';
import upDir from './upDir.js';
import catEmulation from './Basic-operations/cat.js';
import addEmulation from './Basic-operations/add.js';
import renameEmulation from './Basic-operations/rename.js';
import copyEmulation from './Basic-operations/copy.js';
import moveEmulation from './Basic-operations/move.js';
import deleteEmulation from './Basic-operations/delete.js';
import osEOL from './os/osEOL.js'
import hash from './hash/hash.js';
import compress from './compress/compress.js';
import decompress from './compress/decompress.js';
export default function Welcome(args){
  const rl = readline.createInterface({ input, output });

  let startDir = null;
    let name = args.slice(args.length - 1).join('').split('--username=')
    const userName = name[1]
    rl.output.write(`Welcome to the File Manager, ${userName}!` + '\n');
    currentPath(getHomeDir(),'')
    startDir = getHomeDir()
   rl.on('line', (input)=>{
     let inputInclude = input.split(' ')
     if(inputInclude[0].includes('.exit')){
       closeApp(userName) 
     }
    else if(inputInclude[0].includes('ls')){
      console.log(startDir,' ------ls');
      process.chdir(startDir)
      startDir = process.cwd()
      emulatorLs(startDir)
     }
     else if(inputInclude[0].includes('cd')){
        let x = cdEmulation(startDir,input)
        startDir = x
     }
     else if (inputInclude[0].includes('up')){
          let x = upDir(startDir)
          startDir = x
     }
     else if (inputInclude[0].includes('cat')){
      let x = catEmulation(startDir, input)
      startDir = x
     } 
     else if (inputInclude[0].includes('add')){
      let x = addEmulation(startDir, input)
      startDir = x
     }
     else if (inputInclude[0].includes('rn')){
      let x = renameEmulation(startDir, input)
      startDir = x
     }
     else if (inputInclude[0].includes('cp')){
      let x = copyEmulation(startDir, input)
      startDir = x
     }
     else if (inputInclude[0].includes('mv')){
      let x = moveEmulation(startDir, input)
      startDir = x
     }
     else if (inputInclude[0].includes('rm')){
      let x = deleteEmulation(startDir, input)
      startDir = x
     }
     else if (inputInclude[0].includes('os')){
      let x = osEOL(startDir, input)
      startDir = x
     }
     else if (inputInclude[0].includes('hash')){
      let x = hash(startDir, input)
      startDir = x
     }
     else if (inputInclude[0].includes('decompress')){
      let x = decompress(startDir, input)
      startDir = x
     }
     else if (inputInclude[0].includes('compress')){
      let x = compress(startDir, input)
      startDir = x
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