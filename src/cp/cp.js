import child_process from 'child_process'
export const spawnChildProcess = async (args) => {
    // Write your code here
    let child =  child_process.fork('files/script.js',args)
    child.on('data',(data)=>{
        console.log('Master process', data);
    })
  
};
spawnChildProcess(process.argv) 