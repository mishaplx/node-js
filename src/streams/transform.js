import { Transform } from 'stream';
import { stdin, stdout } from 'node:process';


export const transform = async () => {
class Reverse extends Transform {
    constructor(options){

        super(options)
    }
    _transform(chunk , encoding, callback){
        this.push(chunk.toString().split('').reverse().join(''))
        callback()
    }
}
  stdin.pipe(new Reverse()).pipe(stdout)
};
await transform()