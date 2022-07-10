import { gql } from "apollo-server-express"

const typeDefsFavourites = gql`

type Favourites {
    id: ID!
    userId: ID!
    bands: [ID]
    genres: [ID]
    artists: [ID]
    tracks: [ID]
}

input inputFavourites {
    id: ID!
    userId: ID!
    bands: [ID]
    genres: [ID]
    artists: [ID]
    tracks: [ID]
}
type Query {
  createGenre(input: inputGenre): Genre
  deleteGenre(input: inputGenre): Genre
}


`

export { typeDefsFavourites }
// type Mutation {
//   addTrackToFavourites
// addBandToFavourites
// addArtistToFavourites
// addGenreToFavourites
//   updateGenre(message: String): String
// }