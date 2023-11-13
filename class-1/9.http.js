const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((request, response) => {
  console.log('request redcived')
  response.end(`First server with nodejs on port ${server.address().port}`)
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => console.log(`server listening on port ${server.address().port}`))
})
