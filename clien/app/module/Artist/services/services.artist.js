import { RESTDataSource } from 'apollo-datasource-rest';

export class ArtistAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'http://localhost:3002/v1/artists/';
    
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
  async createArtist({name,  description, country,year,firstName,secondName}) {

    const data = await this.post('',{
       name, 
       description, 
       country,
       year,
       firstName,
       secondName
    });
  
    return data
  }
  async deleteArtist(id){
    const data = await this.delete(`/${id}`)
    return data
  }
  
}

