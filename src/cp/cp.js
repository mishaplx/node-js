import child_process from 'child_process'
import path from "path";
export const spawnChildProcess = async (args) => {
    // Write your code here
    const __dirname = path.resolve();
    const pathFile = path.join(__dirname,"src", "cp", 'files', "script.js")
    let child =  child_process.fork(pathFile,args)
    child.on('data',(data)=>{
        console.log('Master process', data);
    })
  
};
await spawnChildProcess(process.argv)