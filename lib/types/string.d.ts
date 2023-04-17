/// <reference path="_string.d.ts" />
/// <reference path="operators.d.ts" />

declare namespace Tx {
	namespace String {
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the `first` element of a string
		 * @example
		 * ```ts
		 * type T = Tx.String.First<"hello">;
		 * type T = "h";
		 * ```
		 * @param {string} T  The target string
		 * @returns {string} The `first` element of the string
		 */
		type First<T extends string> = _Equal<T, string> extends true
			? string | undefined
			: _StringFirst<T>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the `last` element of a string
		 * @example
		 * ```ts
		 * type T = Tx.String.Last<"hello">;
		 * type T = "o";
		 * ```
		 * @param {string} T  The target string
		 * @returns {string} The `last` element of the string
		 */
		type Last<T extends string> = _Equal<T, string> extends true
			? string | undefined
			: _StringLast<T>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Split a string to an array
		 * @example
		 * ```ts
		 * type T = Tx.String.Split<"hello", "l">;
		 * type T = ["He", "", "o"];
		 * ```
		 * @param {string} T  The string to split
		 * @param {string} S The string separator when create a new array item
		 * @default ""
		 * @returns {string[]} The string splitted to array
		 */
		type Split<T extends string, S extends string = ""> = _Equal<
			T,
			string
		> extends true
			? string[]
			: _StringSplit<T, S>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get an element of a string by `Index`
		 * @example
		 * ```ts
		 * type T = Tx.String.At<"hello", 1>;
		 * type T = "e";
		 * ```
		 * @param {string} T  The target string
		 * @param {number} I The index of the string
		 * @returns {string} The char in the string
		 */
		type At<T extends string, I extends number> = _Equal<T, string> extends true
			? string | undefined
			: _StringAt<T, I>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the length of a string
		 * @example
		 * ```ts
		 * type T = Tx.String.Length<"hello">;
		 * type T = 5;
		 * ```
		 * @param {string} T  The target string
		 * @returns {number} The length of the string
		 */
		type Length<T extends string> = _Equal<T, string> extends true
			? number
			: _StringLength<T>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the first index of an element in a string
		 * @example
		 * ```ts
		 * type T = Tx.String.IndexOf<"hello", "l">;
		 * type T = 2;
		 * ```
		 * @param {string} T  The target string
		 * @param {string} S The element to find
		 * @returns {number} The first index of your element or `-1`
		 */
		type IndexOf<T extends string, S extends string> = _Equal<
			T,
			string
		> extends true
			? number
			: _StringIndexOf<T, S>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the last index of an element in a string
		 * @example
		 * ```ts
		 * type T = Tx.String.LastIndexOf<"hello", "l">;
		 * type T = 3;
		 * ```
		 * @param {string} T  The target string
		 * @param {string} S The element to find
		 * @returns {number} The last index of your element or `-1`
		 */
		type LastIndexOf<T extends string, S extends string> = _Equal<
			T,
			string
		> extends true
			? number
			: _StringLastIndexOf<T, S>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Replace a char to another in a string
		 * @example
		 * ```ts
		 * type T = Tx.String.Replace<
		 *  "hello",
		 *  "l",
		 *  "x"
		 * >;
		 * type T = "hexlo";
		 * ```
		 * @param {string} T  The target string
		 * @param {string} From The element to replace
		 * @param {string} To Will be replaced by
		 * @returns {string} The string updated
		 */
		type Replace<
			T extends string,
			From extends string,
			To extends string
		> = _Equal<T, string> extends true ? string : _StringReplace<T, From, To>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Replace all matching char to another in a string
		 * @example
		 * ```ts
		 * type T = Tx.String.ReplaceAll<
		 *  "hello",
		 *  "l",
		 *  "x"
		 * >;
		 * type T = "hexxo";
		 * ```
		 * @param {string} T  The target string
		 * @param {string} From The element to replace
		 * @param {string} To Will be replaced by
		 * @returns {string} The string updated
		 */
		type ReplaceAll<
			T extends string,
			From extends string,
			To extends string
		> = _Equal<T, string> extends true
			? string
			: _StringReplaceAll<T, From, To>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Reverse a string
		 * @example
		 * ```ts
		 * type T = Tx.String.Reverse<"hello">;
		 * type T = "olleh";
		 * ```
		 * @param {string} T  The target string
		 * @returns {string} The string reversed
		 */
		type Reverse<T extends string> = _Equal<T, string> extends true
			? string
			: _StringReverse<T>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Slice a string by `start` and `end` indexes
		 * @example
		 * ```ts
		 * type T = Tx.String.Slice<"hello", 2, 4>;
		 * type T = "ll";
		 * ```
		 * @param {string} T  The target string
		 * @param {number} Start  The starting slice index
		 * @default 0
		 * @param {number} End  The ending slice index
		 * @default T['length']
		 * @returns {string} The string sliced
		 */
		type Slice<T extends string, Start = 0, End = Length<T>> = _Equal<
			T,
			string
		> extends true
			? string
			: _StringSlice<T, Start, End>;
	}
}
