import { Category } from "../Category";

export class ImgCategory extends Category {
    constructor() {
        super("img");

        this.add("dog", []);
        this.add("cat", []);
        this.add("panda", []);
        this.add("red_panda", []);
        this.add("birb", []);
        this.add("fox", []);
        this.add("koala", []);

        this.initializeMethods();
    }
}