import * as importSettings from './Settings';
import { API as importAPI } from './API';
import { Model as importModel } from './Model';
import { App as importApp } from './models/App';
import { User as importUser } from './models/User';
import { Image as importImage } from './datatypes/image/Image';

export const Settings = importSettings;

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

export async function init(options?: OptionsInterface) {
    /*
     * Handle Options
     *
     * Update the settings before booting any object.
     */
    if (options) {
        if (options.hasOwnProperty('settings')) {
            // @ts-ignore
            updateSettings(options.settings);
        }
    }

    /*
     * Boot API before models.
     *
     * This will ensure that the API is ready to use before the models use it.
     */
    await API.boot();

    /*
     * Boot models.
     */
    await App.boot();
    await User.boot();
}

function updateSettings(options: JSON) {
    let keys = Object.keys(options);

    for (let key of keys) {

        // @ts-ignore
        importSettings[key] = options[key];
    }
}

interface OptionsInterface {
    settings?: JSON;
}

export namespace datatypes {
    export const Image = importImage;
    export type Image = importImage;
}