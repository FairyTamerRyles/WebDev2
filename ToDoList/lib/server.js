
const http = require('http');

const { app } = require('./app');
const config = require('./config');

const server = http.createServer(app);
server.listen(config.portNumber, () => {
    console.log(`listening on port ${config.portNumber}...`)
});