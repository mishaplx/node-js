import currentPath from './currentPath.js';
export default function cdEmulation(input){
  const newp = input.split(' ')
  console.log(typeof newp);
   const path = process.env.USERPROFILE + newp[1]
   console.log("\x1b[35m",path);
   currentPath(path)
}