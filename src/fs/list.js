import fs from 'fs'
import path from 'path'
export const list = async () => {
    const __dirname = path.resolve();
    fs.access(path.join(__dirname, "files"), fs.F_OK, (err)=>{
        if(err){
            console.log(new Error('FS operation failed'));
        }
        else{
            fs.readdir(path.join(__dirname, "files"), (err,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    for (let i = 0; i < data.length; i++) {
                        console.log(data[i]);
                        
                    }
                }
            })
        }
    })
   
};
