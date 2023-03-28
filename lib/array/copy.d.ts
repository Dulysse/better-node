/// <reference path="../types/union.d.ts" />

interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Make a new exact copy of your array in memory
	 * @return your array copied.
	 */
	copy(): this;
}

interface ReadonlyArray<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Make a new exact copy of your array in memory
	 * @return your array copied.
	 */
	copy(): Tx.Array.Readable<this>;
}
