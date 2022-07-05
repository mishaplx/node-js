import { ApolloServer }  from "apollo-server"

import { makeExecutableSchema } from '@graphql-tools/schema';

import { typeDefsUser } from './module/User/Shema/user.shema.js'
import { typeDefsTrack } from "./module/Track/Shema/typeDefs.js"
import { typeDefsBand } from "./module/Band/Shema/typeDefs.js";
import { typeDefsGenre } from "./module/Genre/Shema/typeDefs.js";
import { typeDefsArtist } from "./module/Artist/Shema/artist.shema.js"; 
import { typeDefsFavourites } from "./module/Favorite/Shema/typeDefs.js";

import {resolversTrack} from './module/Track/Shema/resolvers.js'
import { resolversUser } from './module/User/Shema/resolvers.js'
import { resolversArtist } from "./module/Artist/Shema/resolvers.js";

import { UserAPI } from "./module/User/services/services.user.js";
import { ArtistAPI } from "./module/Artist/services/services.artist.js";

///const typeDefs = [typeDefsTrack, typeDefsUser, typeDefsBand, typeDefsGenre, typeDefsArtist, typeDefsFavourites]
const typeDefs = [typeDefsUser, typeDefsArtist]
const resolvers = [resolversUser, resolversArtist]
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
    }),
    playground: {
      endpoint:"/graphql"
    },
    context: ({ req }) => {
      // Note: This example uses the `req` argument to access headers,
      // but the arguments received by `context` vary by integration.
      // This means they vary for Express, Koa, Lambda, etc.
      //
      // To find out the correct arguments for a specific integration,
      // see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields
   
      // Get the user token from the headers.
      const token = req.headers.authorization || '';
    
     
   
      // Add the user to the context
      return { token };
    },
  });
 

server.listen(4000).then(({url})=>{
  
       console.log(` server running on port ${url}`);
})
