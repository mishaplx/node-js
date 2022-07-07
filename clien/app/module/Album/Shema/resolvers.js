const resolversAlbum = {
  Query : {
    album: async (_,{id},
      {dataSources})=> {
      
        console.log(id); 
      let data = await dataSources.AlbumAPI.getById(id)
      return  data
    },
    albums: async(_,__,
      {dataSources})=> {
        let data = await dataSources.AlbumAPI.getByAll(__)
      return  data.items
    },
  },
  Mutation:{
    createAlbum: async (_, {input},{dataSources})=>{
      const data = await dataSources.AlbumAPI.createGenreService(input)
      return data
    },
    deleteAlbum:  async (_, {id},{dataSources})=>{
      const data = await dataSources.AlbumAPI.deleteGenreService(id)
      return data
    },
  }

}

export { resolversAlbum }