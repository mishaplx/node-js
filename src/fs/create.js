import fs from 'fs'
import path from 'path'

export const create = async () => {
    const __dirname = path.resolve();
    console.log(path.join(__dirname, 'files'));
    //Write your code here 
    const content = 'I am fresh and young';
    fs.access(path.join(__dirname, 'files', 'fresh.txt'), fs.F_OK, (err) => {
        if (err) {
            fs.writeFile(path.join(__dirname, 'files','fresh.txt'), content, (err)=>{
                if(err){
                    console.log(new Error(err));
                }
                else{
                    console.log('create');
                }
            })
        }
        else{
            console.log(new Error('FS operation failed'));
        }
      
        
      })

};
