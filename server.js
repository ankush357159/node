let http = require('http')
// console.log(http.METHODS)
// console.log(http.STATUS_CODES)

const server = http.createServer(function (req, res)  {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('Hello from NodeJS')    
    res.end()
})

const app = function() {
    const server = http.createServer(this)
    console.log(this)

    return server.listen.apply(server, arguments)
}; app();

server.listen(4000)

// const app.listen = function () {
//     const server = http.createServer(this)
//     return server.listen.apply(server, arguments)
// }