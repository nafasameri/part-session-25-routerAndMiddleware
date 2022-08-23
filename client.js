const http = require('http');

http.request({
    hostname: 'localhost',
    port: process.env.port || 5000,
    path: '/samplePOST?id=5',
    method: 'POST',
}, (res) => {
    res.on('data', (chunk) => {
        console.log(JSON.parse(chunk.toString()));
    });
    // res.end();
}).end();
