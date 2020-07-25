import { Category } from "../Category";

export class FactsCategory extends Category {
    constructor() {
        super("facts");

        this.add("dog", []);
        this.add("cat", []);
        this.add("panda", []);
        this.add("bird", []);
        this.add("fox", []);
        this.add("koala", []);

        this.initializeMethods();
    }
}