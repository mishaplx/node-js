import { users } from '../db.ts'
import url from 'url'
export default function deleteResponse(request,response){
  let urlRequest = url.parse(request.url, true)
  let userId = urlRequest.query.userId
            
  let arrUser = users.map((item, i) => {
    if(item.id == userId){
      users.splice(i, 1);
    }
  })
  if(arrUser.length == users.length){
    console.log('404');
    response.end('404')
  }
  let res1 = JSON.stringify(arrUser)
  response.statusCode = 204
  
  response.end(res1)
}