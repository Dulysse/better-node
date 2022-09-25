import { _Of } from "../types/_array";
declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Get the average of an array of number
     */
    average(): _Of<T[], number> extends true ? T : null;
  }
}
export {};