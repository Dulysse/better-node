declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Update your array replace value
     * @param array New array value
     * @returns {T[]} your new Array with new type.
     */
    update(array: T[]): T[];
  }
}
export {};