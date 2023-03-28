/// <reference path="../types/string.d.ts" />

interface String {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Get the first char of a string
	 * @returns {string} Your string first char
	 */
	first(): Tx.String.First<Tx.Any.Satisfy<this, string>>;
}
