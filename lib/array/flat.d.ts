declare global {
  interface Array {
    /**
     * `From @dulysse1/better-node`
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param depth The maximum recursion depth
     */
    flat<A, D extends number = 1>(
      this: A,
      depth?: D
    ): FlatArray<A, D>[]
  }
}
export {};