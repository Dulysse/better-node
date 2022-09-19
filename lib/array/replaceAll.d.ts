declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Replace all selected element of an array
     * @param currentElement Your current value element from your array
     * @param newElement The new value you want to assign
     * @returns {T[]} your array updated
     */
    replaceAll<N extends T>(currentElement: T, newElement: N): T[];
  }
}
export {};