declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Make a new exact copy of your array in memory
     * @return {T[]} your array copied.
    */
    copy(): T[];
  }
}
export {};