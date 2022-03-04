declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Put random values in your array
     * @param min The minimum random value
     * @default 0
     * @param max The maximum random value
     * @default 10
     * @returns {number[]} an array with random numbers
     */
    randomize(min?: number, max?: number): number[];
  }
}
export {};