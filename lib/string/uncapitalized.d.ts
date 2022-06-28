import { Separator } from "./capitalized";
declare global {
    interface String {
      /**
         * `From @dulysse1/better-node`
         * ### Uncapitalized your string
         * @param firstChar Does the first character have to be uncapitalized ?
         * @default true 
         * @param sep Your Uncapitalized separator
         * @returns {string} Your string uncapitalized
      */
      uncapitalized<T extends Separator>(sep?: T, firstChar = true): string;
    }
}
export {};