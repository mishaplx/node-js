import currentPath from "./currentPath.js";

export default function upDir(startDir){

    process.chdir('../')
    let path = process.cwd()
    currentPath(path)
    return path
    

};