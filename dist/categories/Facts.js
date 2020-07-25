"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactsCategory = void 0;
const Category_1 = require("../Category");
class FactsCategory extends Category_1.Category {
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
exports.FactsCategory = FactsCategory;
//# sourceMappingURL=Facts.js.map