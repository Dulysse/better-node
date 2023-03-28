/// <reference path="../types/array.d.ts" />
/// <reference path="../types/union.d.ts" />

interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Order your array in ascending order
	 * @return {number[]} your sorted array.
	 */
	asc(): Tx.Array.IsTuple<this> extends true
		? Tx.Array.Of<this, number> extends true
			? Tx.Array.Asc<Tx.Any.Satisfy<this, number[]>>
			: never
		: number[];
}

interface ReadonlyArray<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Order your array in ascending order
	 * @return {number[]} your sorted array.
	 */
	asc(): Tx.Array.Of<Tx.Array.Readable<this>, number> extends true
		? Tx.Array.Asc<Tx.Any.Satisfy<Tx.Array.Readable<this>, number[]>>
		: never;
}
