const { gql } = require( "apollo-server-express");

const typeDefs = gql`

type Tracks {
  _id: String!
  title: String  
  albumId: String
  bandsIds: [String]
  duration: Int
  released: Int
  genresIds: [String]
}
#Query
 type Query{
  getAllTracks: Tracks
 }

`

module.exports = {typeDefs}
