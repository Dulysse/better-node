/// <reference path="../types/array.d.ts" />
/// <reference path="../types/union.d.ts" />

interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Insert an element in your array at specified index
	 * @param element Element that you want to insert
	 * @param index Index where you want to insert your element in your array
	 * @returns {(C | T)[]} your final array
	 */
	insert<C, I extends number>(
		element: C,
		index: I
	): Tx.Array.IsTuple<this> extends true
		? Tx.Array.Insert<this, I, C>
		: (C | T)[];
}

interface ReadonlyArray<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Insert an element in your array at specified index
	 * @param element Element that you want to insert
	 * @param index Index where you want to insert your element in your array
	 * @returns {(C | T)[]} your final array
	 */
	insert<const C extends unknown, I extends number>(
		element: C,
		index: I
	): Tx.Array.Insert<Tx.Array.Readable<this>, I, C>;
	/**
	 * @from `@dulysse1/better-node`
	 * ### Insert an element in your array at specified index
	 * @param element Element that you want to insert
	 * @param index Index where you want to insert your element in your array
	 * @returns {(C | T)[]} your final array
	 */
	insert<C extends unknown, I extends number>(
		element: C,
		index: I
	): Tx.Array.Insert<Tx.Array.Readable<this>, I, C>;
}
