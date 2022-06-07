import fs from 'fs'
import path from 'path'
export const read = async () => {
    const __dirname = path.resolve();
    fs.access(path.join(__dirname,"src", "fs", "files",'fileToRead.txt'), fs.F_OK, (err)=>{
        if(err){
            console.log(new Error('FS operation failed'));
        }
        else{
            const ReadSteam = fs.createReadStream(path.join(__dirname,"src", "fs", "files",'fileToRead.txt'),"utf8")
            ReadSteam.on('data',(chunk)=>{
                console.log(chunk);
            })
           
        }
    })
    
};
read()