/*
* 简易服务端
* */

const http = require('http')

http.createServer((request, response) => {
    let body = []
    request.on('error', err => {
        console.error(err)
    }).on('data', chunk=> {
        console.log('是啥', chunk)
        body.push(chunk.toString())
    }).on('end', () => {
        body = Buffer.concat(body).toString()
        console.log('body: ', body)
        response.writeHead(200, {'Content-type': 'text/html'})
        response.end('Hello World\n')
    })
}).listen(8089)

console.log('server started!')