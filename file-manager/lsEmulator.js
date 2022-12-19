import fs from 'fs/promises'
import currentPath from './currentPath.js';
export default async function emulatorLs(startDir){
    try{
        const data = await fs.readdir(startDir)
        if(data.length == 0){
            console.log('not file in dir');
            currentPath(startDir)
            return
        }
        function printTable(Name, Type) {
               this.Name = Name;
                this.Type = Type;
        }
        let  filearr =[]
        for (let i = 0; i < data.length; i++) {
                 const typeFile = (await fs.lstat(startDir + '\\' + data[i])).isFile()

               if(typeFile){
                   const file = new printTable(data[i],'file');
                   filearr.push(file)
               }
               else{
                   const file = new printTable(data[i],'directory');
                   filearr.push(file)
               }
           }
        console.table(filearr)
        currentPath(startDir)
    }catch (e) {
        console.log(e)
    }
}