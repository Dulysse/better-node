declare global {
  interface Array<T> {
    /**
     * `From @dulysse1/better-node`
     * ### Get the first element of your array
     * @returns {T | null} your first element or null 
     */
    first(): this extends { length : infer R } ? R extends 0 ? null : T : never;
  }
}
export {};