export class Image {
    file?: File;

    attachInput(element: Element) {
        return new Promise((resolve) => {
            element.addEventListener('change', (event) => {
                // @ts-ignore
                this.file = event.target.files[0];
                resolve(this.file);
            });
        });
    }
}