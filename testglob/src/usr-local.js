var Glob = require('glob').Glob

var pattern = "{./*/*,/usr/local/*(b),./src/*.js}"

console.log(pattern)

var globInstance = new Glob(pattern, { mark: true, sync: true }, function(err, files) {
    console.log("matches 1", files)
})

// globInstance.on('match', function(file) {
//     console.log('match', file)
// })

// globInstance.on('end', function(file) {
//     console.log('end', file)
// })

// globInstance.on('error', function(file) {
//     console.log('error', file)
// })

// globInstance.on('abort', function(file) {
//     console.log('abort', file)
// })

// globInstance.pause()
// globInstance.resume()
// globInstance.abort()

var msg2 = new Glob("./src/*.js", { mark: true, sync: true }, function(err, files) {
    console.log("matches 2", files)
})

var msg3 = new Glob("./src/*(a|a1|us*).js", { mark: true, sync: true }, function(err, files) {
    console.log("matches 3", files)
})

console.log("the last line")