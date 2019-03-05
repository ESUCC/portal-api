import {Model} from "../Model";

// @ts-ignore
export class App extends Model {
    static model_name: string;
    static booted: boolean = false;

    constructor(params?: any) {
        super(params);
        (App.booted || App.boot())
    }

    static boot(): void {
        this.model_name = 'app';
    }
}