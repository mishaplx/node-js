const resolversUser = {

   Mutation:{
    register: async (_,
       {firstName, lastName, email, password},
       {dataSources})=> {
         let response = await  dataSources.UserAPI.register(firstName, lastName,password,email)
         console.log(response);
       
         return response
       }
   },
  Query:{
     login: async (_,
       { email, password},
       {dataSources})=> {
         let response = await  dataSources.UserAPI.getJwt(email, password)
         return {jwts: response.jwt} 
       },
       user: async (_,{id},{dataSources})=>{
      
        let response = await dataSources.UserAPI.getUser(id)
        return response
       }
   },
}


export { resolversUser }