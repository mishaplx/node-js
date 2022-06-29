import { gql } from "apollo-server-express"

const typeDefsArtist = gql`

type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [ID]
    instruments: String
}

input inputArtist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [ID]
    instruments: String
}
type Query {
  createArtist(input: inputArtist): Artist
  deleteArtist(input: inputArtist): Artist
}


`

export { typeDefsArtist }
// type Mutation {
//   updateArtist(message: String): String
// }