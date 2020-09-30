/*
 * Node.Js with TypeScript
 */

// Dependencies
import {StringDecoder} from 'string_decoder';
import {parse, UrlWithParsedQuery} from "url";
import {createServer, IncomingHttpHeaders} from "http";

const server = createServer((req, res) => {
    // Endpoint, Query and HTTP Method
    const url: UrlWithParsedQuery = parse(req.url, true);
    const endpoint: string = url.pathname.replace(/^\/+|\/+$/g, '');
    const query: Object = url.query;
    const method: string = req.method;

    // Headers
    const headers: IncomingHttpHeaders = req.headers;
    const decoder: StringDecoder = new StringDecoder('utf-8');

    let payload: string = '';
    req.on('data', data => payload += decoder.write(data));

    req.on('end', () => {
        res.end(endpoint);
        console.log(method + ' request on: ' + endpoint + ' with: ', query, headers, payload);
    })
});

server.listen(3000, () => console.log('Listening on port 3000'));