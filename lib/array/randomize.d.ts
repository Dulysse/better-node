/// <reference path="../types/array.d.ts" />
/// <reference path="../types/number.d.ts" />

interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Put random values in your array
	 * @param min The minimum random value
	 * @default 0
	 * @param max The maximum random value
	 * @default 10
	 * @returns {number[]} an array with random numbers
	 */
	randomize(min?: number, max?: number): number[];
}

interface ReadonlyArray<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Put random values in your array
	 * @param min The minimum random value
	 * @default 0
	 * @param max The maximum random value
	 * @default 10
	 * @returns {number[]} an array with random numbers
	 */
	randomize<const Min extends number, const Max extends number>(
		min?: Min,
		max?: Max
	): Tx.Array.Fill<
		Tx.Array.Length<Tx.Union.ToArray<T>>,
		Tx.Array.ToUnion<Tx.Number.Range<Min, Max>>
	>;

	/**
	 * @from `@dulysse1/better-node`
	 * ### Put random values in your array
	 * @param min The minimum random value
	 * @default 0
	 * @param max The maximum random value
	 * @default 10
	 * @returns {number[]} an array with random numbers
	 */
	randomize<Min extends number, Max extends number>(
		min?: Min,
		max?: Max
	): Tx.Array.Fill<
		Tx.Array.Length<Tx.Union.ToArray<T>>,
		Tx.Array.ToUnion<Tx.Number.Range<Min, Max>>
	>;
}
