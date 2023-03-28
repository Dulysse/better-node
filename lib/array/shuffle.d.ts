/// <reference path="../types/array.d.ts" />
/// <reference path="../types/union.d.ts" />

interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Shuffle your array randomly
	 * @param count How many shuffle loop you want @default 1 @limit From 1 to 100
	 * @returns {T[]} your array shuffled x time.
	 */
	shuffle<N extends number>(
		count?: N
	): Tx.Array.IsTuple<this> extends true
		? Tx.Array.Fill<Tx.Array.Length<this>, T>
		: T[];
}

interface ReadonlyArray<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Shuffle your array randomly
	 * @param count How many shuffle loop you want @default 1 @limit From 1 to 100
	 * @returns {T[]} your array shuffled x time.
	 */
	shuffle<N extends number>(
		count?: N
	): Tx.Array.Fill<Tx.Array.Length<Tx.Array.Readable<this>>, T>;
}
