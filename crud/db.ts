import { v4 as uuidv4 } from 'uuid'; 

export interface userType {
  id:string,
  username:string,
  age:number,
  hobbies: [string] | []
}

export const users: userType[] = [
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