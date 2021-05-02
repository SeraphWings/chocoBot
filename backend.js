const http = require('http');
const fs = require('fs');
const hostName = 'localhost';
const port = 8080;

const server = http.createServer((req ,res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    fs.readFile('./index.html', null, function (error, html) {
        if (error) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.write(html);
        }
        res.end();
    });

    req.on('data', chunk => {
        console.log(`receive data ${ chunk }`);
    })



});

server.listen(port, hostName, () => {
    console.log(`server is listening on http:// ${hostName}:${port}.`);
});
