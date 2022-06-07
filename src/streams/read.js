import {  stdout } from 'node:process';
import fs from 'fs'
import path from 'path';
import {fileURLToPath} from 'url';
export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
    const readStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'))
    readStream.pipe(stdout)
};
read()