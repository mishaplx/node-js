
import querystring from 'querystring'
import { v4 as uuidv4 } from 'uuid'; 
import { users } from '../db.js'
export default function postResponse(request,response){
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