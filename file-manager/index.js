import {stdout, stdin} from 'process'
import {workerData} from 'node:worker_threads';
export function Welcome(args){
console.log(args);
 //let name = args.slice(args.length - 1).join('').split('--username=')
 //const userName = name[1]
 //stdout.write(`Welcome to the File Manager, ${userName}!` + '\n');

}
export  const buy = (args)=>{
  let name = args.slice(args.length - 1).join('').split('--username=')
  const userName = name[1]
  stdout.write(`Thank you for using File Manager, ${userName}!` + '\n');
}
export const echoExit = (chunk)=>{
  const exitvalue = chunk.toString();
  
  if(exitvalue.includes('.exit')){
    buy(process.argv)
    process.exit();
  }
}
//const currentlyPath = () 

stdin.on('data',echoExit)
process.on('SIGINT', () => {
  buy(process.argv)
  process.exit()
});
 Welcome( workerData)

