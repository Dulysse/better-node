declare global {
  interface String {
    /**
     * `From @dulysse1/better-node`
     *  ### A object can search for and replace matches within a string.
     *  Replaces text in a string, using an object that supports replacement within a string.
     * @param searchValue search a value to replace
     * @param replaceValue replace this value by this
     * @returns {string} a string with replaceValue instead of searchValue
     */
    replaceAll(searchValue: string, replaceValue: string): string;
  }
}
export {};