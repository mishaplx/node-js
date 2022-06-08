import zlib from 'zlib'
import fs from 'fs'
import path from 'path'
import { stdout } from 'process'
export default function decompress(startDir, input){
  const fileToCompress = input.split(' ')[1]
  const fileToDecompres = fileToCompress.split('.')[0] + '.' + fileToCompress.split('.')[1]
  stdout.write(fileToDecompres);
   const brotli = zlib.createBrotliDecompress();
   let readableStream = fs.createReadStream(path.join(startDir, fileToCompress))

   let writeableStream = fs.createWriteStream(path.join(startDir,fileToDecompres))
   const stream = readableStream.pipe(brotli).pipe(writeableStream);
 
   stream.on('finish', () => {
     console.log('Done compressing decompress');
   });
  return startDir
}