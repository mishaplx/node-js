import { gql } from "apollo-server-express"


const typeDefsMembers = gql`
type Members {
  artist: String
  instrument: String
  years: [String]
}
`


  
export { typeDefsMembers }