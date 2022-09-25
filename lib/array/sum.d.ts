import { _Of } from "../types/_array";
declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Get the sum of an array of number
     * @return {number | null} The sum of your array or null if there are not only numbers.
    */
    sum(): _Of<T[], number> extends true ? T[] : null;
  }
}
export {};

