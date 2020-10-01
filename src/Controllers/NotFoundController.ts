import Controller from "./Controller";

export default class NotFoundController implements Controller {
    public invoke(data, callback) {
        callback(404);
    }
}