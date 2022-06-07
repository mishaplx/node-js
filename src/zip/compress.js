import path from 'path';

import fs  from'fs'
import zlib from 'zlib'
import {fileURLToPath} from 'url';
export const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
let readableStream = fs.createReadStream(path.join(__dirname,'files', 'fileToCompress.txt'),  'utf8')

let writeableStream = fs.createWriteStream(path.join(__dirname,'files','archive.gz'))

let gzip = zlib.createGzip()

readableStream.pipe(gzip).pipe(writeableStream)
};
compress()
