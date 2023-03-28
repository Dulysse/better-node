/// <reference path="../types/string.d.ts" />

interface String {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Reverse your string
	 * @returns {string} Your string reversed
	 */
	reverse(): Tx.String.Reverse<Tx.Any.Satisfy<this, string>>;
}
