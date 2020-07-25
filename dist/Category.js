"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const Endpoint_1 = require("./Endpoint");
class Category {
    constructor(cat) {
        this.endpoints = new Map();
        this.category = cat || "";
    }
    add(name, args = [], isBuffer = false) {
        this.endpoints.set(name, new Endpoint_1.Endpoint(`${this.category ? this.category + "/" : ""}${name}`, args, isBuffer));
    }
    initializeMethods() {
        for (const entry of Array.from(this.endpoints.entries())) {
            let [, endpoint] = entry;
            this[endpoint.getName()] = (args = {}) => endpoint.call(args);
        }
    }
}
exports.Category = Category;
//# sourceMappingURL=Category.js.map