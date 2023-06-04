import mongoose from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv';
import typeDefs from './graphql/typeDefs.js'
import resolvers from './graphql/resolvers.js'
import connectDB from './db.js';

dotenv.config();

connectDB();

// // ExchangeRate 모델 정의
// const exchangeRateSchema = new mongoose.Schema({
//   src: String,
//   tgt: String,
//   rate: Number,
//   date: String
// });

// const ExchangeRate = mongoose.model('ExchangeRate', exchangeRateSchema);
  

// ------------ graphql (apollo-server)

const server = new ApolloServer({ typeDefs,resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: process.env.PORT },
});

console.log(`🚀  Server ready at: ${url}`);