import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
const resolversArtist = {
  Query : {
    createArtist: (firstName, secondName)=>{
      axios({
        method: 'post',
        url: 'http://localhost:3004/v1/users/verify',
        data: {
          id: uuidv4(),
          firstName: firstName,
          secondName: secondName
        }
      });
     
    }
  },

}

export { resolversArtist }