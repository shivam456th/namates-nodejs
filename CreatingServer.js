const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello NamesteNodeJS");
});

server.listen(7777);