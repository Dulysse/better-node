import { _Equal } from "../types/operators";
declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Get the sum of an array of number
     * @return {number | null} The sum of your array or null if there are not only numbers.
    */
    sum(): _Equal<T, number> extends true ? this : null
  }
}
export {};

