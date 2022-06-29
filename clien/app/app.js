import { ApolloServer }  from "apollo-server-express"
import express from "express"
import { makeExecutableSchema } from '@graphql-tools/schema';

import { typeDefsUser } from './module/User/Shema/typeDefs.js'
import { typeDefsTrack } from "./module/Track/Shema/typeDefs.js"
import { typeDefsBand } from "./module/Band/Shema/typeDefs.js";
import { typeDefsGenre } from "./module/Genre/Shema/typeDefs.js";
import { typeDefsArtist } from "./module/Artist/Shema/typeDefs.js"; 
import { typeDefsFavourites } from "./module/Favorite/Shema/typeDefs.js";

import {resolversTrack} from './module/Track/Shema/resolvers.js'
import { resolversUser } from './module/User/Shema/resolvers.js'
import http from "http"
const typeDefs = [typeDefsTrack, typeDefsUser, typeDefsBand, typeDefsGenre, typeDefsArtist, typeDefsFavourites]
const resolvers = [resolversTrack,resolversUser]
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
 typeDefs.typeDefsTrack
console.log(typeDefs.typeDefsTrack);
process.exit()
let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    schema
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startServer();
const httpserver = http.createServer(app);

app.get("/rest", function (req, res) {
    res.json({ data: "api working" });
});

app.listen(4000, function () {
    console.log(`server running on port 4000`);
    console.log(`gql path is`);
});