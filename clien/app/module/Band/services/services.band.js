import { RESTDataSource } from 'apollo-datasource-rest';

export class BandAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'http://localhost:3003/v1/bands';
    
  }
  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }
  async getById(id) {
    const data = await this.get(id);
   
    
    return data
  }
  async getByAll(__) {
    const data = await this.get('/',__);
   
    return data
  }
   async createBandService({name}) {

    const data = await this.post('',{
       name, 
      
    });
  
     return data
   }
   async deleteBandService(id){
     const data = await this.delete(`/${id}`)
     return data
   }
  
}

