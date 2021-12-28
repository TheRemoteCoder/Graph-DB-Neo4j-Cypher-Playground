const { Neo4jGraphQL } = require('@neo4j/graphql')
const { ApolloServer } = require('apollo-server')
const neo4j = require('neo4j-driver')

const AURA_ENDPOINT = 'neo4j+s://ce37d5bb.databases.neo4j.io'
const USERNAME      = 'neo4j'
const PASSWORD      = 'rENURA-RUNuVNQESdx77r6MHa40Ivqfv-z4uK5uvFNI'

const driver = neo4j.driver(
  AURA_ENDPOINT, 
  neo4j.auth.basic(USERNAME, PASSWORD), { encrypted: true }
)

const typeDefs = `
  type Person {
    name: String
    knows: [Person] @relationship(type: 'KNOWS', direction: OUT)
    friendCount: Int @cypher(statement:'RETURN SIZE((this)-[:KNOWS]->(:Person))')
  }
`

const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver
})

const server = new ApolloServer({
  schema: neoSchema.schema
})

server.listen().then(({ url }) => {
  console.log(`GraphQL server ready at ${url}`)
})

