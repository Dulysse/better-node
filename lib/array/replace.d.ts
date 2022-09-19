declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Replace the first element match of an array
     * @param currentElement Your current value element from your array
     * @param newElement The new value you want to assign
     * @returns {T[]} your array updated
     */
    replace<N extends T>(currentElement: T, newElement: N): T[];
  }
}
export {};