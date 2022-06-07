import path from 'path';

import fs  from'fs'
import zlib from 'zlib'
export const decompress = async () => {
    const __dirname = path.resolve()
    let readableStream = fs.createReadStream(path.join(__dirname,'files', 'archive.gz'))


    readableStream.on('data', (chunk)=>{
        zlib.unzip(chunk, (err, buffer) => {
            fs.writeFile(path.join(__dirname,'files','fileToCompress.txt'),buffer,(err,res)=>{
                if(err){
                    console.log(err);
                }

            })
            
            
        });
    })

};
decompress()