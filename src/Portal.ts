import * as importSettings from './Settings';
import { API as importAPI } from './API';
import { Image as importImage } from './datatypes/image/Image';

import { Model as importModel } from './Model';

import { App as importApp } from './models/App';
import { Attribute as importAttribute } from "./models/Attribute";
import { Group as importGroup } from "./models/Group";
import { GroupType as importGroupType } from "./models/GroupType";
import { IpAddress as importIpAddress } from "./models/IpAddress";
import { OwnerType as importOwnerType } from "./models/OwnerType";
import { Privilege as importPrivilege } from "./models/Privilege";
import { Tab as importTab } from './models/Tab';
import { User as importUser } from './models/User';

export const Settings = importSettings;

export const API = importAPI;
export type API = importAPI;
export const Model = importModel;
export type Model = importModel;

export const App = importApp;
export type App = importApp;
export const Attribute = importAttribute;
export type Attribute = importAttribute;
export const Group = importGroup;
export type Group = importGroup;
export const GroupType = importGroupType;
export type GroupType = importGroupType;
export const IpAddress = importIpAddress;
export type IpAddress = importIpAddress;
export const OwnerType = importOwnerType;
export type OwnerType = importOwnerType;
export const Privilege = importPrivilege;
export type Privilege = importPrivilege;
export const Tab = importTab;
export type Tab = importTab;
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
    await Attribute.boot();
    await Group.boot();
    await GroupType.boot();
    await IpAddress.boot();
    await OwnerType.boot();
    await Privilege.boot();
    await Tab.boot();
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