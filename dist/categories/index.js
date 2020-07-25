"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const Facts_1 = require("./Facts");
const Img_1 = require("./Img");
const Animu_1 = require("./Animu");
const Canvas_1 = require("./Canvas");
const Other_1 = require("./Other");
exports.api = {
    facts: new Facts_1.FactsCategory(),
    img: new Img_1.ImgCategory(),
    animu: new Animu_1.AnimuCategory(),
    canvas: new Canvas_1.CanvasCategory(),
    other: new Other_1.OtherCategory()
};
//# sourceMappingURL=index.js.map