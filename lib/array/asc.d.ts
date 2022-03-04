import { OnlyNumber } from './types';
declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Ascending an array of number
     * @return {number | null} your sorted array or null in case of other type than number.
     */
    asc(): 'error' extends OnlyNumber<T> ? null : number[];
  }
}
export {};