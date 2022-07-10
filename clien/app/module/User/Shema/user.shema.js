import { gql } from "apollo-server";

const typeDefsUser = gql`
type Test {
  jwts: String
}
type User {
    _id: ID!
    firstName: String
    secondName: String
    middleName: String
    password: String!
    email: String! 
}

 type Mutation {
  register(firstName: String, lastName:String , password:String!,email: String! ): User
    
 }

type  Query {
  jwt(email: String!, password: String!): Test
  user(id:ID!): User
}

`

export {typeDefsUser};
