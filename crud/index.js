import http from 'http'
import { v4 as uuidv4 } from 'uuid'; 
import url from 'url'
import dotenv from 'dotenv'
import querystring from 'querystring'

let users = [
  {
    id: uuidv4(),
    username: 'misha',
    age: 25,
    hobbies : []
  },
  {
    id: uuidv4(),
    username: 'oleg',
    age: 18,
    hobbies : []
  }
]
  
    
  

http.createServer(function(request,response){
  
  let urlRequest = url.parse(request.url, true)
    if (request.method == 'GET'){
      let badRequest = 'userId' in urlRequest.query
      if(urlRequest.search == null){
        let res = JSON.stringify(users)
        response.write(res);
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
     else if(request.method == 'POST'){
       
       let body = ''
       request.on('data',data=>{
         body += data.toString()
         request.on('end',()=>{
          let params = querystring.parse(body)
          let hasName = 'name' in params
          let hasAge = 'age' in params
          let hasHobies = 'hobbies' in params
          let hasArr = []
         
            hasArr.push(hasName)
            hasArr.push(hasAge)
            hasArr.push(hasHobies)
          
          hasArr = hasArr.filter(item => item == false)

        
          
          if(hasArr.length >=1){
            response.statusCode = 400
            response.end('bad request')
          }
          else{
            let arrhobbies = params.hobbies.split(' ')
            let userPush = {
              id: uuidv4(),
              name: params.name,
              age:params.age,
              hobbies: arrhobbies
              
            }

            users.push(userPush)
            response.statusCode = 201
            response.write('ok')
          }
          

        })
       })
     }
    //  else if(request.method == 'PUT'){

    //  }
      else if(request.method == 'DELETE'){
        let userId = urlRequest.query.userId
        
        let arrUser = users.map((item, i) => {
          if(item.id == userId){
            users.splice(i, 1);
          }
        })
        console.log(arrUser);
        if(arrUser.length == users.length){
          console.log('404');
          response.end('404')
        }
        let res1 = JSON.stringify(arrUser)
        response.statusCode = 204
        
        response.end(res1)
      }


  



   response.end()
}).listen(dotenv.config().parsed.PORT)




