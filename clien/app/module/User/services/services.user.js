import { RESTDataSource } from 'apollo-datasource-rest';
export class UserAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'http://localhost:3004/v1/users';
  }
  async getJwt(email, password) {
    const data = await this.post(`login`,{
      email,
      password
    });
   
    return data
  }
  async register(firstName, lastName,password,email) {
    const data = await this.post(`register`,{
      firstName,
      lastName,
      email,
      password
    });
    return data
  }
  async getUser(id) {
    const data = await this.get(id);
   
    return data
  }
}
