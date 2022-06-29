import { gql } from "apollo-server-express"

const typeDefsBand = gql`

interface Band {
    _id: string;
    name: string;
    origin: string;
    membersId: Member[];
    website: string;
    genresIds: string[];
}
type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: String
}

input inputBand {
    id: ID!
    name: String
    origin: String
    members: [Member]
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