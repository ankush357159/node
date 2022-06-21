let http = require("http");
const url = require("url");
const path = require("path");

// console.log(http.METHODS)
// console.log(http.STATUS_CODES)

// const server = http.createServer(function (req, res)  {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write('Hello from NodeJS')
//     res.end()
// })

const app = function () {
  const server = http.createServer(function (req, res) {
    var queryString = new URL(
      "https://mail.yahoo.com:5600/d/folders/1?who=me#ha"
    );
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello");
    res.end();
  });
  server.listen(4000);
};
app();

// const app.listen = function () {
//     const server = http.createServer(this)
//     return server.listen.apply(server, arguments)
// }
// const filename = "users/refs/tes_path.js";
// const filenameAbs = "/home/lenovo/MyProjects/";
// const pathObject = {dir: 'home/lenovo/MyProject', base: 'test_path.js'}
// console.log("Base Name :" + path.basename(filename));
// console.log("Delimiter: " + path.delimiter);
// console.log(path.dirname(filename))
// console.log(path.extname(filename))
// console.log(path.format(pathObject))
// console.log(path.isAbsolute(filename))
// console.log(path.isAbsolute(filenameAbs))
// console.log(path.join(filenameAbs, filename))
// console.log(path.normalize(filename))
// console.log(path.parse(filename))

const EventEmitter = require('events')
const emitter = new EventEmitter()
emitter.on('saved', (arg)=> {
    console.log(`A save event is occured with event name ${arg.name} and id: ${arg.id}`)
})

emitter.emit('saved', {
    id: 1,
    name: 'John Doe'
})
// Output
// A save event is occured with event name John Doe and id: 1

