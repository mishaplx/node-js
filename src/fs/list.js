import fs from 'fs/promises';
import path from 'path'
export const list = async () => {
        const __dirname = path.resolve();
        const err = new Error('FS operation failed')
        const pathFile = path.join(__dirname,"src", "fs", "files")
        try{
            await fs.access(pathFile)
            const files = await fs.readdir(pathFile)
            files.forEach(item=> console.log(item))
        }
        catch (e) {
            console.log(err)
        }

};
 await list()
