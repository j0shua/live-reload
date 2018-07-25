const http = require('http');
const redis = require('redis');

const client = redis.createClient({ host: 'redis_host'});
const port = 3000;


client.on('error', function (err) {
    console.error('zomg!!!:', err)
});



let count = 0;

const server = http.createServer((req, res) => {

    console.log('got request!');

    client.set("string key", `message ${count}`, function(response) {
        console.log("response:", response)
        client.get("string key", function(err, result) {
            res.end(JSON.stringify({ data: `xcount: ${count++} error: ${err && err.message}, result: ${result}` }));
        });
    });
}).listen(port, (err) => {

    if (err) {
        console.error('ERROR:', err.message);
    }
    console.log(`server started on port ${port}`);
});

