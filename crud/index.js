import http from 'http'
import getResponse from './response/get.js';
import postResponse from './response/post.js';
import putResponse from './response/put.js';
import deleteResponse from './response/delete.js';
     
 export default function createCRUD(port){

    http.createServer(function(request,response){
      if (request.url.includes('/api/user')){
        if (request.method == 'GET'){
          getResponse(request,response)
        }
         else if(request.method == 'POST'){
           postResponse(request,response)
         }
         else if(request.method == 'PUT'){
          putResponse(request,response)
          }
          else if(request.method == 'DELETE'){
            deleteResponse(request,response)
          }
      }else{
        response.statusCode = 404;
        response.end('not found')
      }
     
      
    }).listen(port)
  }






 