
import zlib from 'zlib'
import fs from 'fs'
import path from 'path'

export default function compress(startDir, input){
  const fileToCompress = input.split(' ')[1]
  const brotli = zlib.createBrotliCompress();
  let readableStream = fs.createReadStream(path.join(startDir,fileToCompress),  'utf8')

  let writeableStream = fs.createWriteStream(path.join(startDir,`${fileToCompress}.gz`))
  const stream = readableStream.pipe(brotli).pipe(writeableStream);
 
  stream.on('finish', () => {
    console.log('Done compressing');
  });
  return startDir
}