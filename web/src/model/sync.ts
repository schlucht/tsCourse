import axios, { AxiosResponse, AxiosPromise } from 'axios';

interface IHasId {
    id?: number;
}
export class Sync<T extends IHasId> {
    constructor(public rootUrl: string) {}

    fetch(id: number): AxiosPromise<AxiosResponse<T>> {
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: T): AxiosPromise<AxiosResponse<T>> {
        const { id } = data;
        if (id) {
            return axios.put(`${this.rootUrl}/${id}`, data);
        } else {
            return axios.post<AxiosResponse<T>>(`${this.rootUrl}/users`, data);
        }
    }
}
