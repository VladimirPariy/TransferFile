const socket = require('socket.io-client')('http://localhost:3000');const ss = require('socket.io-stream');const fs = require('fs');const filename = 'test-copy.rar';socket.on('connect', function () {  console.log('connected');  socket.emit('sendfile');});ss(socket).on('sending', function(stream) {  stream.pipe(fs.createWriteStream(filename));  stream.on('end', function () {    console.log('file received');  });});