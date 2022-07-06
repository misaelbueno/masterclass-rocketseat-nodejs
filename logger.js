 const eventEmitter = require('events')
 const fs = require('fs')
 const path = require('path')

 const emitter = new eventEmitter()

 emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if (err) throw err
    })
 })

function log(message) {
    emitter.emit('log', message)
}

module.exports = log;
