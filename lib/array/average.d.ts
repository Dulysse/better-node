/// <reference path="../types/array.d.ts" />
/// <reference path="../types/union.d.ts" />

interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Get the average of an array of number
	 * @return {number} the average of your array.
	 */
	average(): Tx.Array.IsTuple<this> extends true
		? Tx.Array.Of<this, number> extends true
			? Tx.Array.Average<Tx.Any.Satisfy<this, number[]>>
			: never
		: number;
}

interface ReadonlyArray<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Get the average of an array of number
	 * @return {number} the average of your array.
	 */
	average(): Tx.Array.Of<Tx.Array.Readable<this>, number> extends true
		? Tx.Array.Average<Tx.Any.Satisfy<Tx.Array.Readable<this>, number[]>>
		: never;
}
