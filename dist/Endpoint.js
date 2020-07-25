"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = void 0;
const p = require("phin");
const qs = require("querystring");
class Endpoint {
    constructor(endpoint, args = [], isBuffer = false, { name = endpoint } = {}) {
        this.isBuffer = false;
        this.endpoint = endpoint;
        this.args = args;
        this.isBuffer = isBuffer;
        this.name = name;
    }
    getName() {
        let split = this.name.split("/");
        let end = split[split.length - 1];
        return end.replace(/[-_]([a-z])/g, (sub, letter, match) => {
            return letter.toUpperCase();
        });
    }
    hasJsonStructure(str) {
        if (typeof str !== 'string')
            return false;
        try {
            const result = JSON.parse(str);
            const type = Object.prototype.toString.call(result);
            return type === '[object Object]'
                || type === '[object Array]';
        }
        catch (err) {
            return false;
        }
    }
    call(args = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let q of this.args) {
                if (!(q in args))
                    throw new Error(`The "${q}" argument is required.`);
            }
            let query = "";
            if (args) {
                query = "?" + qs.stringify(args);
            }
            let { body } = yield p({
                url: `https://some-random-api.ml/${this.endpoint}${query}`,
                parse: (this.isBuffer ? "none" : "json")
            });
            if (this.hasJsonStructure(body.toString()))
                return JSON.parse(body.toString());
            return body;
        });
    }
}
exports.Endpoint = Endpoint;
//# sourceMappingURL=Endpoint.js.map