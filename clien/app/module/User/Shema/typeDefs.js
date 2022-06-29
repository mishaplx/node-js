import { gql } from "apollo-server-express"

const typeDefsUser = `

type User {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    password: String!
    email: String!
}
`

export {typeDefsUser};
