type Separator = "-" | "_" | " ";
interface String {
  /**
     * @from `@dulysse1/better-node`
     * ### Capitalize your string
     * @param firstChar Does the first character have to be capitalized ?
     * @default true 
     * @param sep Your capitalize separator
     * @returns {string} Your string capitalized
  */
  capitalized<T extends Separator>(sep?: T, firstChar = true): string;
}