/// <reference path="../types/array.d.ts" />

interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Get the average of an array of number
	 * @return {number} the average of your array.
	 */
	average(): number;
}

interface ReadonlyArray<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Get the average of an array of number
	 * @return {number} the average of your array.
	 */
	average(): Tx.Array.Average<Tx.Union.ToArray<T>>;
}
