import fs from 'fs/promises'
import path from 'path'
export const remove = async () => {
    const __dirname = path.resolve();
    const err = new Error('FS operation failed')
    const fileName = 'fileToRemove.txt'
   const pathFile = path.join(__dirname,"src", "fs", "files", fileName)
    try{
        await fs.unlink(pathFile)

    }
    catch  {
        console.log(err)
    }
};
await remove();
