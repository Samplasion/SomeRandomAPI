import { Category } from "../Category";
import { Endpoint } from "../Endpoint";

export class OtherCategory extends Category {
    constructor() {
        super();

        this.add("pokedex", ["pokemon"]);
        this.add("chatbot", ["message"]);
        this.add("mc", ["username"]);
        this.add("lyrics", ["title"]);
        this.add("meme", []);
        this.add("bottoken", []);

        // Binary
        this.endpoints.set("encodeBinary", new Endpoint("binary", ["text"], false, {
            name: "encodeBinary"
        }));
        this.endpoints.set("decodeBinary", new Endpoint("binary", ["decode"], false, {
            name: "decodeBinary"
        }));

        // Base64
        this.endpoints.set("encodeBase64", new Endpoint("base64", ["encode"], false, {
            name: "encodeBase64"
        }));
        this.endpoints.set("decodeBase64", new Endpoint("base64", ["decode"], false, {
            name: "decodeBase64"
        }));

        this.initializeMethods();
    }
}