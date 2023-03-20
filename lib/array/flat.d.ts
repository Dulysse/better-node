interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * Returns a new array with all sub-array elements concatenated into it recursively up to the
	 * specified depth.
	 *
	 * @param depth The maximum recursion depth
	 */
	flat<D extends number = 1>(depth?: D): T[];
}
