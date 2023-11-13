const express = require('express')
const app = express()

const desiredPort = process.env.NODE_ENVPORT ?? 3000
const pkmDitto = require('./pokemon/ditto.json')

app.disable('x-powered-by') // disable header X-Powered-By, sensitive lowercase

// Middleware
// app.use('/*', (request, response, next) => {
//   console.log('My first middleware')
//   if (request.method === 'POST' && request.headers['content-type'] === 'application/json') {
//     let body = ''
  
//     request.on('data', chunk => {
//       body += chunk.toString() 
//     })
  
//     request.on('end', () =>{
//       request.body = JSON.parse(body)
//       next()
//     })
//   }
// })

// Express contains method in middleware from create a body
app.use(express.json())

app.get('/', (request, response) => {
  // response.status(200) express add atomaticaly code 200 and Content-Type
  response.send('<b>My first API with express</b>')
})

app.get('/pokemon/ditto', (request,response) => {
  console.log('return ditto characteristics')
  response.json(pkmDitto)
})

app.post('/pokemon', (request, response) => {
    let data = request.body
    data.timestamp = Date.now()
    response.status(201).json(data)
})

app.use((request, response)=>{
  response.status(404).send('Bad Request <b>Not Found</b>')
})

const server = app.listen(desiredPort, (error, port) => {
  if (error) {
    console.log(`Port:${port} isn't available`)
  }
  console.log(`server listening on port: ${server.address().port}`)
})