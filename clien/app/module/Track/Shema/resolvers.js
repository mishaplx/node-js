

const resolversTrack = {
  Query : {
    track: async (_,{id},
      {dataSources})=> {
      let data = await dataSources.TrackAPI.getById(id)
console.log(data);
      return  data
    },
    tracks: async(_,__,
      {dataSources})=> {
        let data = await dataSources.TrackAPI.getByAll(__)
      return  data.items
    },
  },
  // Mutation:{
  //   createAlbumService: async (_, {input},{dataSources})=>{
  //     const data = await dataSources.AlbumAPI.createGenreService(input)
  //     return data
  //   },
  //   deleteAlbumService:  async (_, {id},{dataSources})=>{
  //     const data = await dataSources.AlbumAPI.deleteGenreService(id)
  //     return data
  //   },
  // }

}
 
export { resolversTrack }