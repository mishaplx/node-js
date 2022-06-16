import url from 'url'
import { users } from '../db.js'
import querystring from 'querystring'
export default function putResponse(request,response){
  let body = ''
  let urlRequest = url.parse(request.url, true)
  let userId = urlRequest.query.userId
  request.on('data',data =>{
    body += data.toString()
    let params = querystring.parse(body)
   let username = params.username
   let age = params.age
   let hobbies = params.hobbies.split(' ')
   users.map((item) => {
    if(item.id == userId){
      item.username = username
      item.age = age
      item.hobbies = hobbies
    }
  })
  })
}