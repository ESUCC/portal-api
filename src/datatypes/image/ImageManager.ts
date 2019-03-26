import {Image} from "./Image";

export class ImageManager {
    update: boolean = true;
    current?: Image;
    old?: Image;

    attachInput(element: Element) {
        if (this.current === undefined) this.current = new Image();

        return this.current.attachInput(element);
    }

    resolve() {
        return (this.update && this.current !== undefined)
            ? this.current
            : this.old;
    }
}