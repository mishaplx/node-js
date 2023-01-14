import { IncomingMessage, ServerResponse } from 'http';
import { updateUser } from '../service/put.service';
export default function putResponse(
  request: IncomingMessage,
  response: ServerResponse,
): void {
  request.on('data', (data) => {
    updateUser(request, response, data);
  });

  // request.on('data', (data) => {
  //   body += data.toString();
  //   const params = querystring.parse(body);
  //   const username: string = params.username;
  //   const age = params.age;
  //   const hobbies = params.hobbies;
  //   users.map((item) => {
  //     if (item.id == userId) {
  //       item.username = username;
  //       item.age = age;
  //       item.hobbies = hobbies;
  //     }
  //   });
  // });
}
