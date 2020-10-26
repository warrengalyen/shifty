declare type Option = {
    speed: "auto" | number;
};
export default class Shifty {
    elements: NodeList;
    options: Option;
    move: number;
    constructor(selector: string | NodeList, option?: {});
    setBestImg(element: HTMLElement, insert: HTMLElement): void;
    setup(): void;
    setImgRatio(element: HTMLElement, image: string): void;
    run(): void;
}
export {};
