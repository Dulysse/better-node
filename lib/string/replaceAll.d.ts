/// <reference path="../types/string.d.ts" />

interface String {
	/**
	 * @from `@dulysse1/better-node`
	 *  ### A object can search for and replace matches within a string.
	 *  Replaces text in a string, using an object that supports replacement within a string.
	 * @param searchValue search a value to replace
	 * @param replaceValue replace this value by this
	 * @returns {string} a string with replaceValue instead of searchValue
	 */
	replaceAll<const C extends string, const N extends string>(
		searchValue: C,
		replaceValue: N
	): Tx.String.ReplaceAll<Tx.Any.Satisfy<this, string>, C, N>;
	/**
	 * @from `@dulysse1/better-node`
	 *  ### A object can search for and replace matches within a string.
	 *  Replaces text in a string, using an object that supports replacement within a string.
	 * @param searchValue search a value to replace
	 * @param replaceValue replace this value by this
	 * @returns {string} a string with replaceValue instead of searchValue
	 */
	replaceAll<C extends string, N extends string>(
		searchValue: C,
		replaceValue: N
	): Tx.String.ReplaceAll<Tx.Any.Satisfy<this, string>, C, N>;
}
