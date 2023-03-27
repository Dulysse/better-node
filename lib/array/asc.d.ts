/// <reference path="../types/array.d.ts" />

interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Order your array in ascending order
	 * @return {number[]} your sorted array.
	 */
	asc(): number;
}

interface ReadonlyArray<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Order your array in ascending order
	 * @return {number[]} your sorted array.
	 */
	asc(): Tx.Array.Asc<Tx.Union.ToArray<T>>;
}
