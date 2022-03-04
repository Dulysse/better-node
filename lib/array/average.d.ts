import { OnlyNumber } from './types';
declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Get the average of an array of number
     */
    average(): 'error' extends OnlyNumber<T> ? null : number;
  }
}
export = {};