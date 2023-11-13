const http = require('node:http')
const fileSystem = require('node:fs')
const url = require('node:url')

const desiredPort = process.env.NODE_ENVPORT ?? 3000

const server = http.createServer((request, response) => {
  console.log('Request recived:', request.url)
  let path = url.parse(request.url, false).pathname
  path = path.replaceAll('/', '')
  const params = url.parse(request.url, true).query
  console.log('params: ', params)
  if (path.toLowerCase() === 'home') {
    response.setHeader('Content-Type', 'text/plain; charset=utf-8')
    response.statusCode = 200 // OK
    response.end('This is my first API with node js')
  } else if (path.toLowerCase() === 'charge-image') {
    response.end(fileSystem.readFileSync(params.absoluteUrl, (error, data) => {
      if (error) {
        response.setHeader('Content-Type', 'text/plain')
        response.statusCode = 400 // Bad Request
        return `Error with reading image into: ${params.absoluteUrl}`
      } else {
        response.setHeader('Content-Type', 'image/png')
        response.statusCode = 200 // OK
        return data
      }
    }))
  } else {
    response.statusCode = 404 // Not found
    response.setHeader('Content-Type', 'text/plain; charset=utf-8')
    response.end('Bad Request')
  }
})

server.listen(desiredPort, (error, port) => {
  if (error) {
    console.log(`Port:${port} isn't available`)
  }
  console.log(`server listening on port: ${server.address().port}`)
})
