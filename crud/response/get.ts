import url from 'url'
import { users } from '../db.ts'
export default function getResponse(request,response){
  let urlRequest = url.parse(request.url, true)
  let badRequest = 'userId' in urlRequest.query
  if(urlRequest.search == null){
    let res = JSON.stringify(users)
    response.write(res);
    response.end()
  }
  else if(!badRequest){
    response.statusCode = 400
    request.statusMessage = 'Bad request'
    response.write("Bad request");
    response.end()
    
  }
  else if(urlRequest.search !== null){
    let user = users.filter(item => item.id === urlRequest.query.userId )
    if(!user.length){
      response.statusCode = 404; // адрес не найден
      response.write("Not Found");
      response.end();
    }
    let res = JSON.stringify(user)
    response.write(res);
    
    
    
  }
}