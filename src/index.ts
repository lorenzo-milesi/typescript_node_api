/*
 * Node.Js with TypeScript
 */

// Dependencies
import * as http from 'http';
import * as url from 'url';

const server = http.createServer((req, res) => {
    const path = url
        .parse(req.url, true)
        .pathname
        .replace(/^\/+|\/+$/g, '');
    res.end(path);
    console.log('New request on: ' + path)
});

server.listen(3000, () => console.log('Listening on port 3000'));