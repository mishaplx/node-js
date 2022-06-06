export const parseArgs = () => {
  let resArr = []
  let result = [];
    console.log(process.argv);
    for (let i = 2; i < process.argv.length; i++) {
      resArr.push(process.argv[i])
      
    }
    for (let i = 0; i < resArr.length; i++) {
      if(i % 2){
        result.push(`${resArr[i-1].slice(2,resArr[i-1].length)} is ${resArr[i]}`)
        
      }
      
    }
    console.log(result.join(', '));
    //return result.join(', ')
};
