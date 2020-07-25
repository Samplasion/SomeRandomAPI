"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimuCategory = void 0;
const Category_1 = require("../Category");
class AnimuCategory extends Category_1.Category {
    constructor() {
        super("animu");
        this.add("wink", []);
        this.add("pat", []);
        this.add("hug", []);
        this.initializeMethods();
    }
}
exports.AnimuCategory = AnimuCategory;
//# sourceMappingURL=Animu.js.map