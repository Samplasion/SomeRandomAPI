import { Category } from "../Category";

export class AnimuCategory extends Category {
    constructor() {
        super("animu");

        this.add("wink", []);
        this.add("pat", []);
        this.add("hug", []);

        this.initializeMethods();
    }
}