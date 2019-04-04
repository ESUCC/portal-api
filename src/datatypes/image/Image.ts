export class Image {
    file?: File;
    raw?:  any;

    attachInput(element: Element) {
        return new Promise((resolve) => {
            element.addEventListener('change', (event) => {
                // @ts-ignore
                this.file = event.target.files[0];

                let fileReader = new FileReader();

                fileReader.onload = () => {
                    this.raw = fileReader.result;
                    resolve(this);
                };

                // @ts-ignore
                fileReader.readAsDataURL(this.file);
            });
        });
    }
}