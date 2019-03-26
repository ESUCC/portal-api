import * as importSettings from './Settings';
import { API as importAPI } from './API';
import { Model as importModel } from './Model';
import { App as importApp } from './models/App';
import { User as importUser } from './models/User';
import { Image as importImage } from './datatypes/image/Image';
export declare const Settings: typeof importSettings;
export declare const API: typeof importAPI;
export declare type API = importAPI;
export declare const Model: typeof importModel;
export declare type Model = importModel;
export declare const App: typeof importApp;
export declare type App = importApp;
export declare const User: typeof importUser;
export declare type User = importUser;
export declare function ucfirst(str: string): string;
export declare function init(options?: OptionsInterface): Promise<void>;
interface OptionsInterface {
    settings?: JSON;
}
export declare namespace datatypes {
    const Image: typeof importImage;
    type Image = importImage;
}
export {};
//# sourceMappingURL=Portal.d.ts.map