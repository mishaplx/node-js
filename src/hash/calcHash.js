import crypto from 'crypto'
import {  createReadStream} from 'fs';
import path from 'path';
const {  createHash } = await import('crypto');
const __dirname = path.resolve()
export const calculateHash = async () => {
  const hash = createHash('sha256');
  const input = createReadStream(path.join(__dirname,"src", "hash", 'files', 'fileToCalculateHashFor.txt'));
  input.on('readable', () => {
    const data = input.read();
    if (data)
      hash.update(data);
    else {
      console.log(`${hash.digest('hex')} ---- fileToCalculateHashFor.txt`);
      return hash.digest('hex')
    }
  });
};

calculateHash()


