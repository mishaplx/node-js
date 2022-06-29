import { gql } from "apollo-server-express"

const typeDefsBand = gql`

interface Band {
    _id: String
    name: String
    origin: String
    membersId:String
    website: String
    genresIds: [String]
}
type Band {
    id: ID!
    name: String
    origin: String
    members: String
    website: String
    genres: String
}

input inputBand {
    id: ID!
    name: String
    origin: String
    members: String
    website: String
    genres: String
}
type Query {
  createBand(input: inputBand): Band
  deleteBand(input: inputBand): Band
}


`

export { typeDefsBand }
// type Mutation {
//   updateBand(message: String): String
// }