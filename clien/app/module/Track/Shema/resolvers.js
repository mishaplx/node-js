

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
  Mutation:{
    createTrack: async (_, {input},{dataSources})=>{
      const data = await dataSources.TrackAPI.createTrackService(input)
      return data
    },
    deleteTrack:  async (_, {id},{dataSources})=>{
      const data = await dataSources.TrackAPI.deleteTrackService(id)
      return data
    },
    updateTrack:  async (_, {id},{dataSources})=>{
      let data = await dataSources.TrackAPI.getById(id)
      console.log(data);
      const dataPut = await dataSources.TrackAPI.updateTrackService(data)
      return dataPut
    },
  }

}
 
export { resolversTrack }