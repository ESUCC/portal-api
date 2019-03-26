import { Image } from "./Image";
export declare class ImageManager {
    update: boolean;
    current?: Image;
    old?: Image;
    attachInput(element: Element): Promise<{}>;
    resolve(): Image | undefined;
}
//# sourceMappingURL=ImageManager.d.ts.map