/*
 * Node.Js with TypeScript
 */

// Dependencies
import * as http from 'http';

const server = http.createServer((req, res) => {
    res.end('Hi !');
});

server.listen(3000, () => console.log('Listening on port 3000'))