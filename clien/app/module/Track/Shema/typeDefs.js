import { gql } from "apollo-server-express"

const typeDefsTrack = gql`

type Track {
  id: ID!
  title: String
  albums: String
  bands: [Band]
  duration: Int
  released: Int
  genres: [Genre]
}

input inputTrack {
  _id: String!
  title: String  
  albumId: String
  bandsIds: [String]
  duration: Int
  released: Int
  genresIds: [String]
}
 type Query {
   createTrack(id: ID): Track
   #deleteTrack(input: inputTrack): Track
 }


`

export { typeDefsTrack }
// type Mutation {
//   updateTrack(message: String): String
// }