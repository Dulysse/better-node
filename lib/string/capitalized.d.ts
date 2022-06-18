export type Separator = "-" | "_" | " ";
declare global {
    interface String {
      /**
         * `From @dulysse1/better-node`
         * ### Capitalize your string
         * @param first Does the first character have to be capitalized ?
         * @default true 
         * @param sep Your capitalize separator
         * @returns {string} Your string capitalized
      */
      capitalized<T extends Separator>(first = true, sep?: T): string;
    }
}
export {};