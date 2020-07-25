import { Endpoint } from "./Endpoint";

export interface Category {
    string: Endpoint
}

export class Category {
    endpoints = new Map<string, Endpoint>();
    category: string;

    constructor(cat?: string) {
        this.category = cat || "";
    }

    add(name: string, args: string[] = [], isBuffer = false) {
        this.endpoints.set(name, new Endpoint(`${this.category ? this.category + "/" : ""}${name}`, args, isBuffer));
    }

    initializeMethods() {
        for (const entry of Array.from(this.endpoints.entries())) {
            let [, endpoint] = entry;
            (this as any)[endpoint.getName()] = (args = {}) => endpoint.call(args);
        }
    }
}