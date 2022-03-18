declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Order your array in ascending order
     * @return {number[] | null} your sorted array or null in case of other type than number.
     */
    asc(): OnlyArrayOf<T, number>;
  }
}
export {};