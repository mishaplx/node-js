import { gql } from "apollo-server-express"

const typeDefsGenre = gql`

type Genre {
    _id: ID!
    name: String
    description: String
    country: String
    year: Int
}

input inputGenre {
  
  name: String  
  description: String
  country: String
  year: Int

}
type deleteGenre {
  acknowledged: Boolean
  deletedCount: Int
}
type Query {
  genre(id:ID):Genre
  genres:[Genre!]!
}

 type Mutation {
  createGenre(input: inputGenre): Genre
  deleteGenre(id: ID): deleteGenre
   #updateGenre(message: String): String
 }
`

export { typeDefsGenre }
