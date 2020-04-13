import axios, { AxiosResponse } from 'axios';
import { Eventing } from './eventing';
import { Sync } from './sync';

export interface IUserProps {
    id?: number;
    name?: string;
    age?: number;
}
const rootUrl = 'http://localhost:3000/users'
export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<IUserProps> = new Sync<IUserProps>(rootUrl);

    
}
