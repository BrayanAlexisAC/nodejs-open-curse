const express = require('express')
const app = express()

const desiredPort = process.env.NODE_ENVPORT ?? 3000

app.disable('x-powered-by') // disable header X-Powered-By, sensitive lowercase

// Express contains method in middleware from create a body
app.use(express.json())

app.get('/', (request, response) => {
  response.send('<b>My first API with express</b>')
})

app.use((request, response) => {
  response.status(404).send('Bad Request <b>Not Found</b>')
})

const server = app.listen(desiredPort, (error, port) => {
  if (error) {
    console.log(`Port:${port} isn't available`)
  }
  console.log(`server listening on port: ${server.address().port}`)
})
