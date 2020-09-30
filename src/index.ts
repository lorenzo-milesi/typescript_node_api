/*
 * Node.Js with TypeScript
 */

// Dependencies
import * as http from 'http';
import * as url from 'url';

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const endpoint = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');
    const query = parsedUrl.query;
    const method = req.method;
    res.end(endpoint);
    console.log(method + ' request on: ' + endpoint + ' with: ', query);
});

server.listen(3000, () => console.log('Listening on port 3000'));