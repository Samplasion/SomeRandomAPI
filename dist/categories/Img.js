"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImgCategory = void 0;
const Category_1 = require("../Category");
class ImgCategory extends Category_1.Category {
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
exports.ImgCategory = ImgCategory;
//# sourceMappingURL=Img.js.map