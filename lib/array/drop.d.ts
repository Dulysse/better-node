/// <reference path="../types/array.d.ts" />

interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Destroy recursively element of your array
	 * @param elem One or many elements of your array you want to destroy
	 * @return {T[]} your array without dropped elements.
	 */
	drop<C extends T>(...elem: C[]): T[];
}

interface ReadonlyArray<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Destroy recursively element of your array
	 * @param elem One or many elements of your array you want to destroy
	 * @return {T[]} your array without dropped elements.
	 */
	drop<C extends T>(...elem: C[]): Tx.Array.Drop<Tx.Union.ToArray<T>, C>;
}
