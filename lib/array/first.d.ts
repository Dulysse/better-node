declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Get the first element of your array
     * @returns {T | undefined} your first element or null 
     */
    first(): this['length'] extends 0 ? undefined : T;
  }
}
export {};