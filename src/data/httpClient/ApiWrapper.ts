import {AxiosInstance} from 'axios';
import {injectable} from 'inversify';

import axiosApi from './Api';

export interface IApiClient {
  get<TResponse>(path: string): Promise<TResponse>;
}

@injectable()
export default class ApiWrapper implements IApiClient {
  private axiosApi: AxiosInstance = axiosApi;

  async get<TResponse>(path: string): Promise<TResponse> {
    try {
      const response = await this.axiosApi.get(path);
      return response.data;
    } catch (error: any) {
      const {response} = error;
      this.httpErrorThrow(response.status, response.data.error.message);
    }

    return {} as TResponse;
  }

  private httpErrorThrow(code: number, message: string): Error {
    switch (code) {
      default:
        throw new Error(message);
    }
  }
}
