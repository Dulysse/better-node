/// <reference path="../types/array.d.ts" />

interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Order your array in descending order
	 * @return {number[]} your sorted array.
	 */
	desc(): number[];
}

interface ReadonlyArray<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Order your array in descending order
	 * @return {number[]} your sorted array.
	 */
	desc(): Tx.Array.Desc<Tx.Union.ToArray<T>>;
}
