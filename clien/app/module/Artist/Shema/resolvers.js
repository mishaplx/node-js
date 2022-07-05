
const resolversArtist = {
  Query:{
    artist: async (_,{id},
      {dataSources})=> {
        let data = await dataSources.ArtistAPI.getById(id)
        return  data
      },
      artists: async (_,__,
        {dataSources})=> {
          let data = await dataSources.ArtistAPI.getByAll(__)
          return data.items
          
        },
  },
 
  Mutation:{
    createArtist: async(_, {input},  {dataSources})=>{
      let data = await dataSources.ArtistAPI.createArtist(input)
      return data
    },
    deleteArtist: async(_, {id},  {dataSources})=>{
      let data = await dataSources.ArtistAPI.deleteArtist(id)
      return data
    },
    updateArtist: async(_, {id},  {dataSources})=>{
      let data = await dataSources.ArtistAPI.getById(id)
      console.log(data);
      //let data = await dataSources.ArtistAPI.updateArtist(id)
      //return data
    }
    
  }
}

export { resolversArtist }