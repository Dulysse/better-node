/// <reference path="../types/array.d.ts" />
/// <reference path="../types/union.d.ts" />

interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Replace the first element match of an array
	 * @param currentElement Your current value element from your array
	 * @param newElement The new value you want to assign
	 * @returns {T[]} your array updated
	 */
	replace<const C extends T, const N extends any>(
		currentElement: C,
		newElement: N
	): Tx.Array.IsTuple<this> extends true
		? Tx.Array.Replace<this, C, N>
		: (T | N)[];
	/**
	 * @from `@dulysse1/better-node`
	 * ### Replace the first element match of an array
	 * @param currentElement Your current value element from your array
	 * @param newElement The new value you want to assign
	 * @returns {T[]} your array updated
	 */
	replace<C extends T, N extends any>(
		currentElement: C,
		newElement: N
	): Tx.Array.IsTuple<this> extends true
		? Tx.Array.Replace<this, C, N>
		: (T | N)[];
}

interface ReadonlyArray<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Replace the first element match of an array
	 * @param currentElement Your current value element from your array
	 * @param newElement The new value you want to assign
	 * @returns {T[]} your array updated
	 */
	replace<const C extends T, const N extends any>(
		currentElement: C,
		newElement: N
	): Tx.Array.Replace<Tx.Array.Readable<this>, C, N>;

	/**
	 * @from `@dulysse1/better-node`
	 * ### Replace the first element match of an array
	 * @param currentElement Your current value element from your array
	 * @param newElement The new value you want to assign
	 * @returns {T[]} your array updated
	 */
	replace<C extends T, N extends any>(
		currentElement: C,
		newElement: N
	): Tx.Array.Replace<Tx.Array.Readable<this>, C, N>;
}
