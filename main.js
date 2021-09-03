const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

// connection mongodb
mongoose.connect('mongodb://localhost:27017/bwa-graphql')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Server runnning: ${url}`)
})