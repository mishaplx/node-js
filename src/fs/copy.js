import fs from 'fs/promises';
import path from 'path'

export const copy = async () => {
    const __dirname = path.resolve();
    const err = new Error('FS operation failed')
    const pathFolder = path.join(__dirname,"src", "fs", "files")
    try {
     await fs.access(pathFolder)
     await fs.mkdir(path.join(__dirname,"src", "fs","files_copy"))
       const data = await fs.readdir(path.join(__dirname,"src", "fs", "files"))
        for (let i = 0; i < data.length; i++) {
           const readData =  await fs.readFile(path.join(__dirname,"src", "fs", "files", data[i]))
           await fs.writeFile(path.join(__dirname,"src", "fs", "files_copy", data[i]),readData)
        }
    }
    catch (e) {
        console.log(err);
    }
};
await copy()