import { Action as ReduxAction } from 'redux';
import { AxiosRequestConfig, AxiosError } from 'axios';

export type ActionError<R = any> = Partial<AxiosError<R>>;

export type Action<T = string, P = any> = ReduxAction<T> & {
  payload: P;
  error?: ActionError;
};

export type AxiosAction<T, P = {}> = Action<T, { request: AxiosRequestConfig } & P>;
