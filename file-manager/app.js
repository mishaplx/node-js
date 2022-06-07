import {stdout, stdin} from 'process'
import fs from 'fs'
import path from 'path'
import readline from 'readline';
import Welcome from './welcome.js'

// export  const exit = (userName)=>{
//   if(typeof userName == 'object'){

//     let name = userName.slice(userName.length - 1).join('').split('--username=')
//     const Name = name[1]
//     stdout.write(`Thank you for using File Manager, ${Name}!` + '\n');
//   }
//   else{
//     stdout.write(`Thank you for using File Manager, ${userName}!` + '\n');

//   }
// }


//const ls = (currentPath) =>{
  //stdout.write(`ls funct--- ${currentPath}`)
//   fs.readdir(path.join(currentPath), (err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         for (let i = 0; i < data.length; i++) {
            
//             stdout.write(`${data[i]} \n`)
            
//         }
//     }
// })
//}
// const cd = (oldPath)=>{
//   stdout.write(oldPath);
// }
// const currentlyPath = (path)=>{
//   stdout.write(`You are currently ${path} `)
// }

// process.on('SIGINT', () => {
//   exit(process.argv)
//   process.exit(0)
// });
 Welcome(process.argv)

