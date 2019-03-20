import * as Settings from './Settings';
import { API as importAPI } from './API';
import { Model as importModel } from './Model';
import { App as importApp } from './models/App';
import { User as importUser } from './models/User';

export namespace Portal {
    export const VERSION = Settings.VERSION;
    export const URL = Settings.URL;
    export const DEBUG = Settings.DEBUG;

    export const API = importAPI;
    export type API = importAPI;
    export const Model = importModel;
    export type Model = importModel;

    export const App = importApp;
    export type App = importApp;
    export const User = importUser;
    export type User = importUser;

    export function ucfirst(str: string)
    {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    export async function init() {
        await App.boot();
        await User.boot();
    }
}