import { RESTDataSource } from 'apollo-datasource-rest';

export class GenreAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'http://localhost:3001/v1/genres';
    
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
   async createGenreService({name,  description, country,year}) {

    const data = await this.post('',{
       name, 
       description, 
       country,
       year,
      
    });
  
     return data
   }
   async deleteGenreService(id){
     console.log(id);
     const data = await this.delete(`/${id}`)
     return data
   }
  
}

