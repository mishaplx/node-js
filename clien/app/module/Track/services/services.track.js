import { RESTDataSource } from 'apollo-datasource-rest';

export class TrackAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'http://localhost:3006/v1/tracks';
    
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
    //console.log(data);
   
    return data
  }
  //  async createAlbumService({name, released}) {

  //   const data = await this.post('',{
  //      name, 
  //      released
  //   });
  
  //    return data
  //  }
  //  async deleteAlbumService(id){
  //    console.log(id);
  //    const data = await this.delete(`/${id}`)
  //    return data
  //  }
  
}

