import { _Equal } from "../types/operators";
declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Get the average of an array of number
     */
    average(): _Equal<T, number> extends true ? this : null
  }
}
export {};