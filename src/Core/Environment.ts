export default class Environment {
    get name(): string {
        return this._name;
    }

    get ports(): { http: number; https: number } {
        return this._ports;
    }

    private readonly _name: string;
    private readonly _ports: {
        'http': number,
        'https': number,
    };

    constructor(name: string, http: number, https: number) {
        this._name = name;
        this._ports = {
            'http': http,
            'https': https
        };
    }
}