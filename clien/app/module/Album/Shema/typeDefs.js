const { gql } = require( "apollo-server-express");

const typeDefs = gql`

type Album {
    id: ID
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
}

input inputAlbums {
  id: ID
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
}
type Query {
  createAlbum(input: inputAlbums): Album
  deleteAlbum(input: inputAlbums): Album
}


`

module.exports = {typeDefs}
// type Mutation {
//   updateTrack(message: String): String
// }