import {parse, UrlWithParsedQuery} from "url";
import {IncomingHttpHeaders} from "http";
import {StringDecoder} from "string_decoder";
import HelloController from "../Controllers/HelloController";
import NotFoundController from "../Controllers/NotFoundController";
import Controller from "../Controllers/Controller";

export function serverLogic(req, res) {
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
        payload += decoder.end();

        const controller: Controller = typeof (router[endpoint]) !== 'undefined' ? router[endpoint] : new NotFoundController();
        const data = {
            'endpoint': endpoint,
            'query': query,
            'method': method,
            'headers': headers,
            'payload': payload
        };

        controller.invoke(data, (status, payload) => {
            status = typeof(status) == 'number' ? status : 200;
            payload = typeof(payload) == 'object' ? payload : {};
            payload = JSON.stringify(payload);

            res.setHeader('Content-Type', 'application/json');
            res.writeHead(status);
            res.end(payload);
            console.log(method + ' request on: ' + endpoint);
        })
    });
}

const router: { [endpoint: string]: Controller } = {
    'hello': new HelloController()
};