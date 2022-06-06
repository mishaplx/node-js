import path from 'path';

import fs  from'fs'
import zlib from 'zlib'
export const compress = async () => {
const __dirname = path.resolve()
let readableStream = fs.createReadStream(path.join(__dirname,'files', 'fileToCompress.txt'),  'utf8')

let writeableStream = fs.createWriteStream(path.join(__dirname,'files','archive.gz'))

let gzip = zlib.createGzip()

readableStream.pipe(gzip).pipe(writeableStream)
};
compress()
