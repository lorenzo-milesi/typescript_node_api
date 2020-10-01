/*
 * Node.Js with TypeScript
 */
import * as http from "http";
import * as https from "https";
import {serverLogic} from "./Core/ServerLogic";
import env from "./config";
import * as fs from 'fs';

http.createServer(serverLogic)
    .listen(env.ports.http, () => console.log('Listening on ' + env.ports.http + ' in ' + env.name + ' mode'));

const httpsOptions = {
    'key': fs.readFileSync('./https/key.pem'),
    'cert': fs.readFileSync('./https/cert.pem')
};

https.createServer(httpsOptions, serverLogic)
    .listen(env.ports.https, () => console.log('Listening on ' + env.ports.https + ' in ' + env.name + ' mode'));
