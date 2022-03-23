declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Get the average of an array of number
     */
    average(): OnlyArrayOf<T, number>;
  }
}
export {};