/// <reference path="../types/_array.d.ts" />
interface Array<T> {
  /**
   * @from `@dulysse1/better-node`
   * ### Replace the first element match of an array
   * @param currentElement Your current value element from your array
   * @param newElement The new value you want to assign
   * @returns {T[]} your array updated
   */
  replace<C extends T, N extends any>(currentElement: C, newElement: N): _Replace<T[], C, N> | (T | N)[];
}