const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const schema = require('./schema')

require('./db/setup')
const app = express()

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    formatError: (error) => {
      return { message: error.message }
    }
  })
)

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)
const PORT = 5678
app.listen(PORT, () => {
  console.log('Server running on port 5679')
})