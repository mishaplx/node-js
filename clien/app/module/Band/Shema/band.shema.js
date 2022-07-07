import { gql } from "apollo-server-express"

const typeDefsBand = gql`


type Band {
    _id: ID!
    name: String
    origin: String
    members: [Members]
    website: String
    genres: [Genre]
}

input inputBand {
    name: String
}
type Query {
  band(input: inputBand): Band
  bands(limit: Int): [Band!]!
}

type deleteBand {
  acknowledged: Boolean
  deletedCount: Int
}
 type Mutation {
  createBand(input: inputBand): Band
  deleteBand (id: ID): deleteBand
  # updateBand(message: String): String
 }
`

export { typeDefsBand }
