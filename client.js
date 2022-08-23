const http = require('http');
const logger = require('log4js').getLogger();
logger.level = 'debug';

const req = http.request({
    hostname: 'localhost',
    port: process.env.port || 5000,
    path: '/sampleGET',
    method: 'GET',
}, (res) => {
    // res.on('data', (chunk) => {
    // logger.info(JSON.parse(chunk.toString()));
    // });
    // res.end();
});
req.write(JSON.stringify({
    "id": "1",
    "name": "Airpods Wireless Bluetooth Headphones",
    "description": "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    "price": 89.99
}));
req.end();
