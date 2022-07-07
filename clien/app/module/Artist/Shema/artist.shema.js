import { gql } from "apollo-server-express"

const typeDefsArtist = gql`

type Artist {
    _id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [ID]
    instruments: String
}
type deleteArtist {
  acknowledged: Boolean
  deletedCount: Int
}
input inputArtist {
    name: String
    description:String
    country: String
    year: String
    firstName: String
    secondName:String
}
type Query {
  artist(id:ID): Artist
  artists(limit: Int):[Artist!]!
  }
type Mutation {
  createArtist(input: inputArtist): Artist
  deleteArtist(id:ID): deleteArtist
  updateArtist(id:ID):Artist
}

`

export { typeDefsArtist }
