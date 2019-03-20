import { API as importAPI } from './API';
import { Model as importModel } from './Model';
import { App as importApp } from './models/App';
export declare namespace Portal {
    const VERSION: string;
    const URL: string;
    const DEBUG: boolean;
    const API: typeof importAPI;
    type API = importAPI;
    const Model: typeof importModel;
    type Model = importModel;
    const App: typeof importApp;
    type App = importApp;
    function ucfirst(str: string): string;
}
//# sourceMappingURL=Portal.d.ts.map