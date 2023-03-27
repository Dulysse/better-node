/// <reference path="../types/array.d.ts" />

interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Get the last element of your array
	 * @returns {T | undefined} your last element or null
	 */
	last(): T | undefined;
}

interface ReadonlyArray<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Get the last element of your array
	 * @returns {T | undefined} your last element or null
	 */
	last(): Tx.Any.Equal<T, never> extends true
		? undefined
		: Tx.Array.Last<Tx.Union.ToArray<T>>;
}
