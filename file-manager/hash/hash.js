import {  createReadStream} from 'fs';
import path from 'path';
const {  createHash } = await import('crypto');
export default function hash(startDir, input){
  const fileToHash = input.split(' ')[1]
  const hash = createHash('sha256');
  const inputStr = createReadStream(path.join(startDir, fileToHash));
  inputStr.on('readable', () => {
    const data = inputStr.read();
    if (data)
      hash.update(data);
    else {
      console.log(`${hash.digest('hex')} ---- ${fileToHash}`);
      return hash.digest('hex')
    }
  });
  return startDir
}