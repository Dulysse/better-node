interface Array<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Shuffle your array randomly
	 * @param count How many shuffle loop you want @default 1 @limit From 1 to 100
	 * @returns {T[]} your array shuffled x time.
	 */
	shuffle<N extends number>(count?: N): T[];
}

interface ReadonlyArray<T> {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Shuffle your array randomly
	 * @param count How many shuffle loop you want @default 1 @limit From 1 to 100
	 * @returns {T[]} your array shuffled x time.
	 */
	shuffle<N extends number>(count?: N): T[];
}
