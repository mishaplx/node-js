export const parseEnv = () => {
  process.env.RSS__myname = 'misha';
  process.env.RSS__mylastname = 'plxx';
 
   for (const iterator in process.env) {
    
     if(iterator.includes('RSS__')){
       console.log(`${iterator}=${process.env[iterator]}`);
      
     }

     
   }

     
};
