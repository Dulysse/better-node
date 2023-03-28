/// <reference path="../types/string.d.ts" />

interface String {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Get the last char of a string
	 * @returns {string} Your string last char
	 */
	last(): Tx.String.Last<Tx.Any.Satisfy<this, string>>;
}
