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

  title: String! 
  albumId: String
  artistsIds:[String]
  bandsIds: [String]
  duration: Int
  released: Int
  genresIds: [String]
}
type deleteTrack {
  acknowledged: Boolean
  deletedCount: Int
}
 type Query {
   track(id: ID): Track
   tracks(limit: Int): [Track!]!
 }
  type Mutation {
    createTrack(input: inputTrack): Track
    deleteTrack(id: ID): deleteTrack
    updateTrack(id:ID): Track
 }

`

export { typeDefsTrack }
