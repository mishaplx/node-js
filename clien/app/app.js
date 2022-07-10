import { ApolloServer }  from "apollo-server"

import { makeExecutableSchema } from '@graphql-tools/schema';

import { typeDefsUser } from './module/User/Shema/user.shema.js'
import { typeDefsTrack } from "./module/Track/Shema/track.shema.js"
import { typeDefsBand } from "./module/Band/Shema/band.shema.js";
import { typeDefsGenre } from "./module/Genre/Shema/genre.shema.js";
import { typeDefsArtist } from "./module/Artist/Shema/artist.shema.js"; 
import { typeDefsFavourites } from "./module/Favorite/Shema/typeDefs.js";
import { typeDefsMembers } from "./module/Members/Shema/members.shema.js";
import { typeDefsAlbum } from "./module/Album/Shema/album.shema.js"

import {resolversTrack} from './module/Track/Shema/resolvers.js'
import { resolversUser } from './module/User/Shema/resolvers.js'
import { resolversArtist } from "./module/Artist/Shema/resolvers.js";
import { resolversGenre } from "./module/Genre/Shema/resolvers.js"
import { resolversBand } from "./module/Band/Shema/resolvers.js";
import { resolversAlbum } from "./module/Album//Shema/resolvers.js"

import { UserAPI } from "./module/User/services/services.user.js";
import { ArtistAPI } from "./module/Artist/services/services.artist.js";
import { GenreAPI } from "./module/Genre/services/services.genre.js";
import { BandAPI } from "./module/Band/services/services.band.js"
import { AlbumAPI } from "./module/Album/services/services.album.js"
import { TrackAPI } from "./module/Track/services/services.track.js"
 
///const typeDefs = [typeDefsTrack, typeDefsUser, typeDefsBand, typeDefsGenre, typeDefsArtist, typeDefsFavourites]
const typeDefs = [typeDefsUser, typeDefsArtist, typeDefsGenre,typeDefsBand, typeDefsMembers, typeDefsAlbum, typeDefsTrack]
const resolvers = [resolversUser, resolversArtist, resolversGenre, resolversBand,resolversAlbum,resolversTrack]
const executableSchema = makeExecutableSchema({ 
  typeDefs,
  resolvers,
});


  let server = new ApolloServer({
    schema: executableSchema,
    csrfPrevention: true,
    cache: "bounded",
    dataSources: () => ({
        UserAPI: new UserAPI(),
        ArtistAPI: new ArtistAPI(),
        GenreAPI: new GenreAPI(),
        BandAPI: new BandAPI(),
        AlbumAPI: new AlbumAPI(),
        TrackAPI: new TrackAPI()
    }),
    playground: {
      endpoint:"/graphql"
    }, 
    context: ({ req }) => {
      const token = req.headers.authorization || '';
      return { token };
    },
  });
 

server.listen(4000).then(({url})=>{
       console.log(` server running on port ${url}`);
})
