import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';

import { env } from '@/env';

class BaseApi {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({ baseURL: env.NEXT_PUBLIC_BASE_API_URL });
  }

  get = async <TResponseData>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<TResponseData>> => {
    return this.axiosInstance.get(url, config);
  };

  post = async <TResponseData>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<TResponseData>> => {
    return this.axiosInstance.post(url, data, config);
  };

  put = async <TResponseData>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<TResponseData>> => {
    return this.axiosInstance.put(url, data, config);
  };

  delete = async <TResponseData>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<TResponseData>> => {
    return this.axiosInstance.delete(url, config);
  };

  patch = async <TResponseData>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<TResponseData>> => {
    return this.axiosInstance.patch(url, data, config);
  };
}

export const baseApi = new BaseApi();
