const resolversBand = {
  Query : {
    band: async (_,{id},
      {dataSources})=> {
      
        console.log(id); 
      let data = await dataSources.GenreAPI.getById(id)
      return  data
    },
    bands: async(_,__,
      {dataSources})=> {
        let data = await dataSources.GenreAPI.getByAll(__)
      
     
      return  data.items
    },
  },
  Mutation:{
    createBand: async (_, {input},{dataSources})=>{
      const data = await dataSources.BandAPI.createBandService(input)
      return data
    },
    deleteBand:  async (_, {id},{dataSources})=>{
      const data = await dataSources.BandAPI.deleteBandService(id)
      return data
    },
  }

}

export { resolversBand }