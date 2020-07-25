import { FactsCategory } from "./Facts";
import { ImgCategory } from "./Img";
import { AnimuCategory } from "./Animu";
import { CanvasCategory } from "./Canvas";
import { OtherCategory } from "./Other";

export const api = {
    facts: new FactsCategory(),
    img: new ImgCategory(),
    animu: new AnimuCategory(),
    canvas: new CanvasCategory(),

    other: new OtherCategory()
}