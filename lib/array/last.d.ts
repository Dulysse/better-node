declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Get the last element of your array
     * @returns {T | null} your last element or null 
     */
    last(): this extends { length : infer R } ? R extends 0 ? null : T : never;
  }
}
export {};