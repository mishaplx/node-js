import fs from 'fs'
import path from 'path'
export const rename = async () => {
    const __dirname = path.resolve();
    fs.access(path.join(__dirname, "files", 'wrongFilename.txt'), fs.F_OK, (err) => {
        if(err){
          
            console.log(new Error('FS operation failed'));
            
        }
        else{
            fs.access(path.join(__dirname, "files", 'properFilename.md'), fs.F_OK, (err) => {
                if(err){
                    fs.rename(path.join(__dirname, "files", 'wrongFilename.txt'),path.join(__dirname, "files", 'properFilename.md'),(err) =>{
                        if(err){
                            console.log(err);
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
