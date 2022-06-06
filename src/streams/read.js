import {  stdout } from 'node:process';
import fs from 'fs'
import path from 'path';
export const read = async () => {
    const __dirname = path.resolve()
    const readStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'))
    readStream.pipe(stdout)
};
