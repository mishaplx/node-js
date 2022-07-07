import { gql } from "apollo-server-express"

const typeDefsTrack = gql`

type Track {
  _id: ID!
  title: String!
  album: Album
  artists: [Artist]
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
   track(id: ID): Track
   tracks(id: ID): [Track!]!
 }


`

export { typeDefsTrack }
// type Mutation {
//   updateTrack(message: String): String
// }