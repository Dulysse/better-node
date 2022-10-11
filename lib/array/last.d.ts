declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Get the last element of your array
     * @returns {T | undefined} your last element or null 
     */
    last(): this['length'] extends 0 ? undefined : T;
  }
}
export {};