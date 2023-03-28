/// <reference path="../types/array.d.ts" />
/// <reference path="../types/union.d.ts" />

interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Replace all selected element of an array
	 * @param currentElement Your current value element from your array
	 * @param newElement The new value you want to assign
	 * @returns {T[]} your array updated
	 */
	replaceAll<const C extends T, const N extends any>(
		currentElement: C,
		newElement: N
	): Tx.Array.IsTuple<this> extends true
		? Tx.Array.ReplaceAll<this, C, N>
		: (T | N)[];
	/**
	 * @from `@dulysse1/better-node`
	 * ### Replace all selected element of an array
	 * @param currentElement Your current value element from your array
	 * @param newElement The new value you want to assign
	 * @returns {T[]} your array updated
	 */
	replaceAll<C extends T, N extends any>(
		currentElement: C,
		newElement: N
	): Tx.Array.IsTuple<this> extends true
		? Tx.Array.ReplaceAll<this, C, N>
		: (T | N)[];
}

interface ReadonlyArray<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Replace all selected element of an array
	 * @param currentElement Your current value element from your array
	 * @param newElement The new value you want to assign
	 * @returns {T[]} your array updated
	 */
	replaceAll<const C extends T, const N extends any>(
		currentElement: C,
		newElement: N
	): Tx.Array.ReplaceAll<Tx.Array.Readable<this>, C, N>;

	/**
	 * @from `@dulysse1/better-node`
	 * ### Replace all selected element of an array
	 * @param currentElement Your current value element from your array
	 * @param newElement The new value you want to assign
	 * @returns {T[]} your array updated
	 */
	replaceAll<C extends T, N extends any>(
		currentElement: C,
		newElement: N
	): Tx.Array.ReplaceAll<Tx.Array.Readable<this>, C, N>;
}
