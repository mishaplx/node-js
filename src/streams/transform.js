import { Transform } from 'stream';
import { stdin, stdout } from 'node:process';


export const transform = async () => {
class Reverse extends Transform {
    newLineChar;
    constructor(options){
        super(options)
        this.newLineChar = process.platform === 'win32' ? '\r\n' : '\n';
    }
    _transform(chunk , encoding, callback){
        try {

            const resultString = chunk.toString().split('').reverse().join('') + this.newLineChar;

            callback(null, resultString);
        } catch (err) {
            callback(err);
        }
    }
}
  stdin.pipe(new Reverse()).pipe(stdout)


};
await transform()