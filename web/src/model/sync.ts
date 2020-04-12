import axios, {AxiosResponse} from 'axios'
import {UserProps} from './user'

export class Sync<T> {

    constructor(public rootUrl: string) {}

    fetch(data: UserProps): AxiosResponse<UserProps> {
       return axios
          .get(`${this.rootUrl}/${data.id}`)
          .then((response: AxiosResponse<UserProps>) => {
            return response.data as UserProps;
          });
      }
    
      save(data: UserProps): AxiosResponse<UserProps> {
        const id = data.id;
        if (id) {
          axios.put(`${this.rootUrl}/${id}`, data)
          .then((res: AxiosResponse<UserProps>) => {
              return res
          })
        } else {
          axios.post<AxiosResponse<UserProps>>(`${this.rootUrl}/users`, data)
          .then((res:AxiosResponse<UserProps>) => {
              return res;
          })
        }
      }
}