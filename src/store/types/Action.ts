import { Action as ReduxAction } from 'redux';
import { AxiosRequestConfig } from 'axios';

export type Action<T = string, P = any> = ReduxAction<T> & {
  payload: P;
};

export type AxiosAction<T, P = {}> = Action<T, { request: AxiosRequestConfig } & P>;
