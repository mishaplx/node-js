export const parseArgs = () => {
   let resArr = process.argv.slice(2,process.argv.length)
   let result = [];
    for (let i = 0; i < resArr.length; i++) {
      if(i % 2){
        result.push(`${resArr[i-1].slice(2,resArr[i-1].length)} is ${resArr[i]}`)
      }
    }
    console.log(result.join(', '));
     //return result.join(', ')


};
parseArgs()
