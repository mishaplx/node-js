export const parseEnv = () => {
  process.env.RSS_myname = 'misha';
  process.env.RSS_mylastname = 'plxx';

   for (const iterator in process.env) {
     if(iterator.includes('RSS_')){
       console.log(`${iterator}=${process.env[iterator]}`);
     }

   }

     
};
parseEnv()