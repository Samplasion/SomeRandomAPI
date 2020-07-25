import * as p from "phin";
import * as qs from "querystring";

export class Endpoint {
    endpoint: string;
    args: string[];
    isBuffer: boolean =  false;
    name: string;

    constructor(endpoint: string, args: string[] = [], isBuffer = false, {
        name = endpoint
    } = {}) {
        this.endpoint = endpoint;
        this.args = args;
        this.isBuffer = isBuffer;
        this.name = name;
    }

    getName() {
        let split = this.name.split("/");
        let end = split[split.length - 1];
        return end.replace(/[-_]([a-z])/g, (sub, letter, match): string => {
            return letter.toUpperCase();
        })
    }

    hasJsonStructure(str: unknown) {
        if (typeof str !== 'string') return false;
        try {
            const result = JSON.parse(str);
            const type = Object.prototype.toString.call(result);
            return type === '[object Object]' 
                || type === '[object Array]';
        } catch (err) {
            return false;
        }
    }

    async call(args: any = {}): Promise<Object | Buffer> {
        // console.log(args, this.args)
        for (let q of this.args) {
            if (!(q in args))
                throw new Error(`The "${q}" argument is required.`);
        }
        let query = "";
        if (args) {
            query = "?" + qs.stringify(args);
        }
        let { body } = await p({
            url: `https://some-random-api.ml/${this.endpoint}${query}`,
            parse: (this.isBuffer ? "none" : "json") as "none"
        });

        if (this.hasJsonStructure(body.toString()))
            return JSON.parse(body.toString());
        
        return body;
    }
}