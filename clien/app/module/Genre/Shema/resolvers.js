const resolversGenre = {
  Query : {
    genre: async (_,{id},
      {dataSources})=> {
      
        console.log(id); 
      let data = await dataSources.GenreAPI.getById(id)
      return  data
    },
    genres: async(_,__,
      {dataSources})=> {
        let data = await dataSources.GenreAPI.getByAll(__)
      
     
      return  data.items
    },
  },
  Mutation:{
    createGenre: async (_, {input},{dataSources})=>{
      const data = await dataSources.GenreAPI.createGenreService(input)
      return data
    },
    deleteGenre:  async (_, {id},{dataSources})=>{
      const data = await dataSources.GenreAPI.deleteGenreService(id)
      return data
    },
  }

}

export { resolversGenre }