import fs from 'fs/promises';
import path from 'path'

const content = 'I am fresh and young';
const fileName = 'fresh.txt';
const __dirname = path.resolve();
const pathFile = path.join(__dirname,"src", "fs", 'files', fileName)

const createFile = async (filename,path)=>{
  await fs.writeFile(path,content)
}
function checkFileExists(file) {
    return fs.access(file)
        .then(() =>  console.log(new Error('FS operation failed')))
        .catch(() => createFile(file,pathFile))
}
const main = async ()=>{
  await checkFileExists(pathFile)

}
await main()


