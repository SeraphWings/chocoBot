const http = require('http')
const hostName = 'localhost';
const port = 8080;

const server = http.createServer((req ,res) => {
    res.statueCode = 200;
    res.setHeader = ('content-type', 'test/html');
    res.end('<p> server test</p>');
});

server.listen(port, hostName, () => {
    console.log(`server is listening on http:// ${hostName}:${port}.`);
});
