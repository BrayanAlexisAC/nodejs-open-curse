const http = require('node:http')
const pkmDitto = require('./pokemon/ditto.json')

const desiredPort = process.env.NODE_ENVPORT ?? 3000

const processRequest = (request, response) => {
  const { method, url } = request

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          createHeaderResponse(response, 200, 'application/json')
          console.log('return ditto characteristics')
          response.end(JSON.stringify(pkmDitto))
          break
        default:
          // response.statusCode = 404
          // response.setHeader('Content-Type', 'text/plain;charset=utf-8')
          // response.end('Bad Request')
          createBadRequest(response)
          break
      }
      break

    case 'POST':
      switch (url) {
        case '/pokemon':
          let body = ''
          request.on('data', chunk => {
            body += chunk.toString() 
          })
          request.on('end', () =>{
            let data = JSON.parse(body)
            data.timestamp = Date.now()
            createHeaderResponse(response, 201, 'application/json; charset=utf-8')
            response.end(JSON.stringify(data))
          })
          break
        default:
          createBadRequest(response)
          break;
      }
      break
    default:
      // response.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'})
      // response.end('Bad Request')
      createBadRequest(response)
      break;
  }
}

function createBadRequest (response) {
  createHeaderResponse(response, 404, 'text/plain;charset=utf-8')
  response.end('Bad Request')
}

function createHeaderResponse(response, code, header){
  response.writeHead(code, {'Content-Type': header})
}

const server = http.createServer(processRequest)

server.listen(desiredPort, (error, port) => {
  if (error) {
    console.log(`Port:${port} isn't available`)
  }
  console.log(`server listening on port: ${server.address().port}`)
})
