import { stdin } from 'node:process';
import fs from 'fs'
import path from 'path';
export const write = async () => {
    const __dirname = path.resolve()
    const writeStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'))
    stdin.pipe(writeStream)
   
};
write()