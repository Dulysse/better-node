/// <reference path="../types/array.d.ts" />
/// <reference path="../types/union.d.ts" />

interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Get the sum of an array of number
	 * @return {number} The sum of your array.
	 */
	sum(): Tx.Array.IsTuple<this> extends true
		? Tx.Array.Of<this, number> extends true
			? Tx.Array.Sum<Tx.Any.Satisfy<this, number[]>>
			: never
		: number;
}

interface ReadonlyArray<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Get the sum of an array of number
	 * @return {number} The sum of your array.
	 */
	sum(): Tx.Array.Of<Tx.Array.Readable<this>, number> extends true
		? Tx.Array.Sum<Tx.Any.Satisfy<Tx.Array.Readable<this>, number[]>>
		: never;
}
