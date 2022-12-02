import fs from 'fs/promises'
import path from 'path'
export const read = async () => {
    const __dirname = path.resolve();
    const err = new Error('FS operation failed')
    const readFileName = 'fileToRead.txt'
    const pathFile = path.join(__dirname,"src", "fs", "files",readFileName)
    try {
       await fs.access(pathFile)
        const data = await fs.readFile(pathFile,"utf8")
        console.log(data)
    }
    catch {
        console.log(err)
    }
};
await read()