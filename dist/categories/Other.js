"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherCategory = void 0;
const Category_1 = require("../Category");
const Endpoint_1 = require("../Endpoint");
class OtherCategory extends Category_1.Category {
    constructor() {
        super();
        this.add("pokedex", ["pokemon"]);
        this.add("chatbot", ["message"]);
        this.add("mc", ["username"]);
        this.add("lyrics", ["title"]);
        this.add("meme", []);
        this.add("bottoken", []);
        this.endpoints.set("encodeBinary", new Endpoint_1.Endpoint("binary", ["text"], false, {
            name: "encodeBinary"
        }));
        this.endpoints.set("decodeBinary", new Endpoint_1.Endpoint("binary", ["decode"], false, {
            name: "decodeBinary"
        }));
        this.endpoints.set("encodeBase64", new Endpoint_1.Endpoint("base64", ["encode"], false, {
            name: "encodeBase64"
        }));
        this.endpoints.set("decodeBase64", new Endpoint_1.Endpoint("base64", ["decode"], false, {
            name: "decodeBase64"
        }));
        this.initializeMethods();
    }
}
exports.OtherCategory = OtherCategory;
//# sourceMappingURL=Other.js.map