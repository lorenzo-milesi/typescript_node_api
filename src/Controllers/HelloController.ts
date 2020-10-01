import Controller from "./Controller";

export default class HelloController implements Controller {
    public invoke(data, callback) {
        callback(200, {'name': 'hello world!'});
    };
}