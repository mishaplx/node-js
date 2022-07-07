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
  albums(limit: Int):[Album]
}

 type Mutation {
  createAlbum(message: String): String
  deleteAlbum(message: String): String
 }
`

export { typeDefsAlbum }
