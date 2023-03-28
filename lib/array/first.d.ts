/// <reference path="../types/array.d.ts" />
/// <reference path="../types/union.d.ts" />

interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Get the first element of your array
	 * @returns {T | undefined} your first element or null
	 */
	first(): Tx.Array.IsTuple<this> extends true
		? Tx.Any.Equal<T, never> extends true
			? undefined
			: Tx.Array.First<this>
		: T | undefined;
}

interface ReadonlyArray<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Get the first element of your array
	 * @returns {T | undefined} your first element or null
	 */
	first(): Tx.Any.Equal<T, never> extends true
		? undefined
		: Tx.Array.First<Tx.Array.Readable<this>>;
}
