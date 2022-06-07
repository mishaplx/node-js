import fs from 'fs'
import path from 'path'
export const remove = async () => {
    const __dirname = path.resolve();
    fs.access(path.join(__dirname,"src", "fs", "files", 'fileToRemove.txt'), fs.F_OK, (err) => {
        if(err){
            console.log(new Error('FS operation failed'));
        }
        else{
            fs.unlink(path.join(__dirname,"src", "fs", "files", 'fileToRemove.txt'),(err)=>{
                if(err){
                    console.log(err);
                }
            })
        }
    })
};
remove();
