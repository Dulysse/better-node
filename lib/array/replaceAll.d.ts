interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Replace all selected element of an array
	 * @param currentElement Your current value element from your array
	 * @param newElement The new value you want to assign
	 * @returns {T[]} your array updated
	 */
	replaceAll<C extends T, N extends any>(
		currentElement: C,
		newElement: N
	): (T | N)[];
}
