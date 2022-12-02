import fs from 'fs/promises';
import path from 'path'

export const rename = async () => {
     const __dirname = path.resolve();
    const err = new Error('FS operation failed')

    const realName = "wrongFilename.txt"
    const newRealName = "properFilename.md"
    const pathFile = path.join(__dirname,"src", "fs", "files",realName)
    const newPathFile = path.join(__dirname,"src", "fs", "files",newRealName)
    try{
        await fs.access(pathFile)
        await fs.rename(pathFile,newPathFile)
    }
    catch (e) {
        console.log(err)
    }

};
await rename()
