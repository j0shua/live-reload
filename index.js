const http = require('http');
const port = 3000;

let count = 0;
const server = http.createServer((req, res) => {

    console.log('got request!');
    res.end(JSON.stringify({ status: `it works ${count++}` }));
}).listen(port, (err) => {

    if (err) {
        console.error('ERROR:', err);
    }
    console.log(`server started on port ${port}`);
});

