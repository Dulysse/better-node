interface ObjectConstructor {
	/**
	 * @from `@dulysse1/better-node`
	 * ### Make an exact copy of your object in memory
	 * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
	 * @returns {T} your object copied in memory
	 */
	copy<T extends object>(o: T): T extends object ? T : never;
}
