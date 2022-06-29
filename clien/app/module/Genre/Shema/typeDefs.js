import { gql } from "apollo-server-express"

const typeDefsGenre = gql`

type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
}

input inputGenre {
  _id: String!
  title: String  
  albumId: String
  bandsIds: [String]
  duration: Int
  released: Int
  genresIds: [String]
}
type Query {
  createGenre(input: inputGenre): Genre
  deleteGenre(input: inputGenre): Genre
}


`

export { typeDefsGenre }
// type Mutation {
//   updateGenre(message: String): String
// }