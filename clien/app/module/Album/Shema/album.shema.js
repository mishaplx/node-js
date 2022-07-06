import { gql } from "apollo-server-express"

const typeDefsAlbum = gql`

type Album {
    _id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
}

# input inputAlbums {
#     id: ID
#     name: String
#     released: Int
#     artists: [Artist]
#     bands: [Band]
#     tracks: [Track]
#     genres: [Genre]
#     image: String
# }
type Query {
  album(id: ID): Album
  albums:[Album]
}

 type Mutation {
  createAlbumService(message: String): String
  deleteAlbumService(message: String): String
 }
`

export { typeDefsAlbum }
