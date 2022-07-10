import { RESTDataSource } from 'apollo-datasource-rest';

export class AlbumAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'http://localhost:3005/v1/albums';
    
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
   async createAlbumService({name, released}) {

    const data = await this.post('',{
       name, 
       released
    });
  
     return data
   }
   async deleteAlbumService(id){
     console.log(id);
     const data = await this.delete(`/${id}`)
     return data
   }
  
}

