import fs from 'fs'
import path from 'path'
export const copy = async () => {
    const __dirname = path.resolve();
    fs.access(path.join(__dirname,"src", "fs", "files"), fs.F_OK, (err) => {
        if(err){
          
            console.log(new Error('FS operation failed'));
        }
        else{
            fs.access(path.join(__dirname,"src", "fs", "files_copy"), fs.F_OK, (err) => {
                if(err){
                    fs.mkdir(path.join(__dirname,"src", "fs", "files_copy"), (err)=>{
                        if(err){
                            console.log(err);
                        }
                        else{
                            fs.readdir(path.join(__dirname,"src", "fs", "files"), (err,data)=>{
                                console.log(data);
                                for (let i = 0; i < data.length; i++) {
                                    const ReadSteam = fs.createReadStream(path.join(__dirname,"src", "fs", "files", data[i]))
                                    const WriteStream = fs.createWriteStream(path.join(__dirname,"src", "fs", "files_copy", data[i]))
                                    ReadSteam.pipe(WriteStream)
                                }
                            })
                        }
                    })
                }
                else{
                    console.log(new Error('FS operation failed'));
                   
                }
            })
        }
    })
};
copy()