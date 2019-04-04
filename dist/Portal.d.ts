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
export declare const Settings: typeof importSettings;
export declare const API: typeof importAPI;
export declare type API = importAPI;
export declare const Model: typeof importModel;
export declare type Model = importModel;
export declare const App: typeof importApp;
export declare type App = importApp;
export declare const Attribute: typeof importAttribute;
export declare type Attribute = importAttribute;
export declare const Group: typeof importGroup;
export declare type Group = importGroup;
export declare const GroupType: typeof importGroupType;
export declare type GroupType = importGroupType;
export declare const IpAddress: typeof importIpAddress;
export declare type IpAddress = importIpAddress;
export declare const OwnerType: typeof importOwnerType;
export declare type OwnerType = importOwnerType;
export declare const Privilege: typeof importPrivilege;
export declare type Privilege = importPrivilege;
export declare const Tab: typeof importTab;
export declare type Tab = importTab;
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