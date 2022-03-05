import { OnlyNumber } from './types';
declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Order your array in descending order
     * @return {number[] | null} your sorted array or null in case of other type than number.
     */
    desc(): 'error' extends OnlyNumber<T> ? null : number[];
  }
}
export {};