const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')

// connection mongodb
mongoose.connect('mongodb://localhost:27017/bwa-graphql')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground
    ]
})

server.listen().then(({url}) => {
    console.log(`Server runnning: ${url}`)
})