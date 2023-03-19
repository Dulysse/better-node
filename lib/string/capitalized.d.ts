interface String {
  /**
     * @from `@dulysse1/better-node`
     * ### Capitalize your string
     * @param firstChar Does the first character have to be capitalized ?
     * @default true 
     * @param sep Your capitalize separator
     * @returns {string} Your string capitalized
  */
  capitalized<T extends "-" | "_" | " ">(sep?: T, firstChar = true): string;
}