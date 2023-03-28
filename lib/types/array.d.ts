/// <reference path="_array.d.ts" />
/// <reference path="operators.d.ts" />

declare namespace Tx {
	namespace Array {
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get an array without the `last` element
		 * @example
		 * ```ts
		 * type T = Tx.Array.Pop<[1, 2, 3, 4]>;
		 * type T = [1, 2, 3];
		 * ```
		 * @param {unknown[]} L  The target array
		 * @returns {unknown[]} The array updated
		 */
		type Pop<L extends unknown[]> = _IsTuple<L> extends true ? _Pop<L> : L;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get an array without the `first` element
		 * @example
		 * ```ts
		 * type T = Tx.Array.Shift<[1, 2, 3, 4]>;
		 * type T = [2, 3, 4];
		 * ```
		 * @param {unknown[]} L  The target array
		 * @returns {unknown[]} The array updated
		 */
		type Shift<L extends unknown[]> = _IsTuple<L> extends true ? _Shift<L> : L;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Join array items to a string with a separator
		 * @example
		 * ```ts
		 * type T = Tx.Array.Join<[1, 2, 3, 4], "/">;
		 * type T = "1/2/3/4";
		 * ```
		 * @param {unknown[]} L  The target array
		 * @param {string} S The char separator
		 * @returns {string} The string of the array elements joined
		 */
		type Join<
			L extends unknown[],
			S extends string = ","
		> = _IsTuple<L> extends true ? _Join<L, S> : string;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the length of an array
		 * @example
		 * ```ts
		 * type T = Tx.Array.Length<[1, 2, 3, 4]>;
		 * type T = 4;
		 * ```
		 * @param {unknown[]} L  The target array
		 * @returns {number} The length of the array
		 */
		type Length<L extends unknown[]> = _IsTuple<L> extends true
			? _Length<L>
			: number;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Replace an array element to another array element
		 * @example
		 * ```ts
		 * type T = Tx.Array.Replace<
		 *  [1, 2, 3, 4, 1],
		 *  1,
		 *  0
		 * >;
		 * type T = [0, 2, 3, 4, 1];
		 * ```
		 * @param {unknown[]} T  The target array
		 * @param {unknown} From The element to replace
		 * @param {unknown} To Will be replaced by
		 * @returns {unknown[]} The array updated
		 */
		type Replace<
			L extends unknown[],
			From extends unknown,
			To extends unknown
		> = _IsTuple<L> extends true ? _Replace<L, From, To> : (L[number] | To)[];
		/**
		 * @from `@dulysse1/better-node`
		 * ### Replace all array elements to another array element
		 * @example
		 * ```ts
		 * type T = Tx.Array.ReplaceAll<
		 *  [1, 2, 3, 4, 1],
		 *  1,
		 *  0
		 * >;
		 * type T = [0, 2, 3, 4, 0];
		 * ```
		 * @param {unknown[]} T  The target array
		 * @param {unknown} From The element to replace
		 * @param {unknown} To Will be replaced by
		 * @returns {unknown[]} The array updated
		 */
		type ReplaceAll<
			L extends unknown[],
			From extends unknown,
			To extends unknown
		> = _IsTuple<L> extends true
			? _ReplaceAll<L, From, To>
			: (L[number] | To)[];
		/**
		 * @from `@dulysse1/better-node`
		 * ### Reverse an array
		 * @example
		 * ```ts
		 * type T = Tx.Array.Reverse<[true, 2, 3, "4"]>;
		 * type T = ["4", 3, 2, true];
		 * ```
		 * @param {unknown[]} L  The target array
		 * @returns {unknown[]} The array reversed
		 */
		type Reverse<L extends unknown[]> = _IsTuple<L> extends true
			? _Reverse<L>
			: L;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the `first` element of an array
		 * @example
		 * ```ts
		 * type T = Tx.Array.First<[1, 2, 3, 4]>;
		 * type T = 1;
		 * ```
		 * @param {unknown[]} L  The target array
		 * @returns {unknown[]} The `first` element of the array
		 */
		type First<L extends unknown[]> = _IsTuple<L> extends true
			? _First<L>
			: L[number];
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the `last` element of an array
		 * @example
		 * ```ts
		 * type T = Tx.Array.Last<[1, 2, 3, 4]>;
		 * type T = 4;
		 * ```
		 * @param {unknown[]} L  The target array
		 * @returns {unknown[]} The `last` element of the array
		 */
		type Last<L extends unknown[]> = _IsTuple<L> extends true
			? _Last<L>
			: L[number];
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the `first` index of an element in an array
		 * @example
		 * ```ts
		 * type T1 = Tx.Array.IndexOf<[1, 2, 3, 4], 5>;
		 * type T1 = -1;
		 *
		 * type T2 = Tx.Array.IndexOf<[1, 2, 3, 4], 3>;
		 * type T2 = 2;
		 * ```
		 * @param {unknown[]} L  The target array
		 * @param {unknown} T The element to find
		 * @returns {number} The `first` index of the element in the array or `-1`
		 */
		type IndexOf<
			L extends unknown[],
			T extends unknown
		> = _IsTuple<L> extends true ? _IndexOf<L, T> : number;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the `last` index of an element in an array
		 * @example
		 * ```ts
		 * type T1 = Tx.Array.LastIndexOf<[1, 2, 3, 4], 0>;
		 * type T1 = -1;
		 *
		 * type T2 = Tx.Array.LastIndexOf<[1, 2, 2, 2], 2>;
		 * type T2 = 3;
		 * ```
		 * @param {unknown[]} L  The target array
		 * @param {unknown} T The element to find
		 * @returns {number} The `last` index of the element in the array or `-1`
		 */
		type LastIndexOf<
			L extends unknown[],
			T extends unknown
		> = _IsTuple<L> extends true ? _LastIndexOf<L, T> : number;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Check if an array including an element
		 * @example
		 * ```ts
		 * type T1 = Tx.Array.Includes<[1, 2, 3, 4], 5>;
		 * type T1 = false;
		 *
		 * type T2 = Tx.Array.Includes<[1, 2, 3, 4], 2>;
		 * type T2 = true;
		 * ```
		 * @param {unknown[]} L  The target array
		 * @param {unknown} T The element to find
		 * @returns {boolean} A boolean
		 */
		type Includes<
			L extends unknown[],
			T extends unknown
		> = _IsTuple<L> extends true ? _Includes<L, T> : boolean;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Find one element of an array by filter
		 * @example
		 * ```ts
		 * type T1 = Tx.Array.Find<
		 *  [1, 2, 3, 4],
		 *  () => 2
		 * >;
		 * type T1 = 2;
		 *
		 * type T2 = Tx.Array.Find<
		 *  [1, 2, 3, 4],
		 *  () => "2"
		 * >;
		 * type T2 = null;
		 * ```
		 * @param {unknown[]} L  The target array
		 * @param {unknown} T The element to find
		 * @param {() => unknown} F The filter function
		 * @returns {L} An element of the array founded or `null`
		 */
		type Find<
			L extends unknown[],
			F extends () => unknown
		> = _IsTuple<L> extends true ? _Find<L, F> : L[number] | null;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Find all elements of an array by filter
		 * @example
		 * ```ts
		 * type T1 = Tx.Array.Filter<
		 *  [1, 1, 1, 4],
		 *  () => 1
		 * >;
		 * type T1 = [1, 1, 1];
		 *
		 * type T2 = Tx.Array.Filter<
		 *  [1, 1, 1, 4],
		 *  () => 0
		 * >;
		 * type T2 = [];
		 * ```
		 * @param {unknown[]} L  The target array
		 * @param {unknown} T The element to find
		 * @param {() => unknown} F The filter function
		 * @returns {L} All elements of the array founded or `[]`
		 */
		type Filter<
			L extends unknown[],
			F extends () => unknown
		> = _IsTuple<L> extends true ? _Filter<L, F> : L;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Parse an array to string
		 * @example
		 * ```ts
		 * type T = Tx.Array.ToString<[1, 2, 3, {}]>;
		 * type T = "1,2,3,[object Object]"
		 * ```
		 * @param {unknown[]} L  The target array
		 * @returns {string} The array as string
		 */
		type ToString<L extends unknown[]> = _IsTuple<L> extends true
			? _ToString<L>
			: string;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Splice an array by `start` and `deleteCount` indexes
		 * @example
		 * ```ts
		 * type T = Tx.Array.Splice<[1, 2, 3, 4], 2, 1>;
		 * type T = [ 3 ];
		 * ```
		 * @param {unknown[]} T  The target array
		 * @param {number} Start  The starting index
		 * @default 0
		 * @param {number} DeleteCount  The delete count
		 * @default T['length']
		 * @returns {unknown[]} The array spliced
		 */
		type Splice<
			L extends unknown[],
			Start extends number = 0,
			DeleteCount extends number = _Length<L>
		> = _IsTuple<L> extends true ? _Splice<L, Start, DeleteCount> : L;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Slice an array by `start` and `end` indexes
		 * @example
		 * ```ts
		 * type T = Tx.Array.Slice<[1, 2, 3, 4], 2, 4>;
		 * type T = [3, 4];
		 * ```
		 * @param {unknown[]} T  The target array
		 * @param {number} Start  The starting slice index
		 * @default 0
		 * @param {number} End  The ending slice index
		 * @default T['length']
		 * @returns {unknown[]} The array sliced
		 */
		type Slice<
			L extends unknown[],
			Start extends number = 0,
			End extends number = Length<L>
		> = _IsTuple<L> extends true ? _Slice<L, Start, End> : L;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Concatenate an array with another
		 * @example
		 * ```ts
		 * type T = Tx.Array.Concat<[1, 2, 3], [4, 5]>;
		 * type T = [1, 2, 3, 4, 5];
		 * ```
		 * @param {unknown[]} L1  The first array
		 * @param {unknown[]} L2  The second array
		 * @returns {unknown[]} The two arrays concatenated
		 */
		type Concat<L1 extends unknown[], L2 extends unknown[]> = _And<
			_IsTuple<L1>,
			_IsTuple<L2>
		> extends true
			? _Concat<L1, L2>
			: (L1[number] | L2[number])[];
		/**
		 * @from `@dulysse1/better-node`
		 * ### Push an element to an array
		 * @example
		 * ```ts
		 * type T = Tx.Array.Push<[1, 2, 3], 4>;
		 * type T = [1, 2, 3, 4];
		 * ```
		 * @param {unknown[]} L  The target array
		 * @param {unknown} T  The element to push
		 * @returns {unknown[]} The array with the pushed element
		 */
		type Push<L extends unknown[], T extends unknown> = _IsTuple<L> extends true
			? _Push<L, T>
			: (L[number] | T)[];
		/**
		 * @from `@dulysse1/better-node`
		 * ### Drop from an array all exactly matching elements
		 * @example
		 * ```ts
		 * type T = Tx.Array.Drop<[1, 2, 3, 4, 1], 1>;
		 * type T = [2, 3, 4];
		 * ```
		 * @param {unknown[]} L  The target array
		 * @param {unknown} T  The element to remove
		 * @returns {unknown[]} The array without the dropped elements
		 */
		type Drop<L extends unknown[], T extends unknown> = _IsTuple<L> extends true
			? _Drop<L, T>
			: L;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Insert an element in an array at a specific index
		 * @example
		 * ```ts
		 * type T = Tx.Array.Insert<[1, 2, 3, 4], 2, 5>;
		 * type T = [1, 2, 5, 3, 4];
		 * ```
		 * @param {unknown[]} L  The target array
		 * @param {number} I The index of the pushed element
		 * @param {unknown} T  The element to push
		 * @returns {unknown[]} The array with the new element
		 */
		type Insert<
			L extends unknown[],
			I extends number,
			T extends unknown
		> = _IsTuple<L> extends true ? _Insert<L, I, T> : (L[number] | T)[];
		/**
		 * @from `@dulysse1/better-node`
		 * ### Check the type of the array
		 * @example
		 * ```ts
		 * type T = Tx.Array.Of<["hello"], string>;
		 * type T = true;
		 * ```
		 * @param {unknown[]} L  The target array
		 * @param {unknown} T  The type to check
		 * @returns {boolean} A boolean at true if the array and type match
		 */
		type Of<L extends unknown[], T extends unknown> = _Of<L, T>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Create a new array with all sub-array elements concatenated into it recursively up to the specified depth
		 * @example
		 * ```ts
		 * type T = Tx.Array.Flat<["hello", [1, 2, 3]]>;
		 * type T = ["hello", 1, 2, 3];
		 * ```
		 * @param {unknown[]} L  The target array
		 * @param {number} Depth  The depth of concatenation
		 * @default 1
		 * @returns {unknown[]} The array concatenated `depth` time(s)
		 */
		type Flat<
			L extends unknown[],
			Depth extends number = 1
		> = _IsTuple<L> extends true ? _Flat<L, Depth> : L;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the element at an index of the array
		 * @example
		 * ```ts
		 * type T = Tx.Array.At<[1, 2, "3", 4, 5], 2>;
		 * type T = "3";
		 * ```
		 * @param {unknown[]} L  The target array
		 * @param {number} I The index of the array
		 * @returns {unknown} The element at that index of `undefined`
		 */
		type At<L extends unknown[], I extends number> = _IsTuple<L> extends true
			? _At<L, I>
			: L[number];
		/**
		 * @from `@dulysse1/better-node`
		 * ### Sort an array of numbers in ascending order
		 * @example
		 * ```ts
		 * type T = Tx.Array.Asc<[5, 2, 1, 4, 3]>;
		 * type T = [1, 2, 3, 4, 5];
		 * ```
		 * @param {number[]} L  The target array
		 * @returns {number[]} The array sorted
		 */
		type Asc<L extends number[]> = _IsTuple<L> extends true
			? _Asc<L>
			: number[];
		/**
		 * @from `@dulysse1/better-node`
		 * ### Sort an array of numbers in descending order
		 * @example
		 * ```ts
		 * type T = Tx.Array.Desc<[5, 2, 1, 4, 3]>;
		 * type T = [5, 4, 3, 2, 1];
		 * ```
		 * @param {number[]} L  The target array
		 * @returns {number[]} The array sorted
		 */
		type Desc<L extends number[]> = _IsTuple<L> extends true
			? _Desc<L>
			: number[];
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the sum of all elements of an array of numbers
		 * @example
		 * ```ts
		 * type T = Tx.Array.Sum<[5, 2, 1, 4, 3]>;
		 * type T = 15
		 * ```
		 * @param {number[]} L  The target array
		 * @returns {number} The sum of the elements of the array
		 */
		type Sum<L extends number[]> = _IsTuple<L> extends true ? _Sum<L> : number;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the average of all elements of an array of numbers
		 * @example
		 * ```ts
		 * type T = Tx.Array.Average<[5, 2, 1, 4, 3]>;
		 * type T = 3
		 * ```
		 * @param {number[]} L  The target array
		 * @returns {number} The average of the elements of the array
		 */
		type Average<L extends number[]> = _IsTuple<L> extends true
			? _Average<L>
			: number;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the `minimum` value of an element in an array of numbers
		 * @example
		 * ```ts
		 * type T = Tx.Array.Min<[5, 2, 1, 4, 3]>;
		 * type T = 1
		 * ```
		 * @param {number[]} L  The target array
		 * @returns {number} The minimum value of the array
		 */
		type Min<L extends number[]> = _IsTuple<L> extends true ? _Min<L> : number;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the `maximum` value of an element in an array of numbers
		 * @example
		 * ```ts
		 * type T = Tx.Array.Max<[5, 2, 1, 4, 3]>;
		 * type T = 5
		 * ```
		 * @param {number[]} L  The target array
		 * @returns {number} The maximum value of the array
		 */
		type Max<L extends number[]> = _IsTuple<L> extends true ? _Max<L> : number;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the median of all elements of an array of numbers
		 * @example
		 * ```ts
		 * type T = Tx.Array.Average<[5, 2, 1, 4, 3]>;
		 * type T = 3
		 * ```
		 * @param {number[]} L  The target array
		 * @returns {number} The median of the elements of the array
		 */
		type Median<L extends number[]> = _IsTuple<L> extends true
			? _Median<L>
			: number;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Check if an array of numbers is sorted in `ASC` or `DESC`
		 * @example
		 * ```ts
		 * type T = Tx.Array.IsSorted<[5, 2, 1, 4, 3], "ASC">;
		 * type T = false
		 * ```
		 * @param {number[]} L  The target array
		 * @param {"ASC"|"DESC"} Type "ASC" or "DESC"
		 * @returns {boolean} A boolean at true if the array is sorted
		 */
		type IsSorted<
			L extends number[],
			Type extends "ASC" | "DESC"
		> = _IsTuple<L> extends true ? _IsSorted<L, Type> : boolean;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Transform an array to an union
		 * @example
		 * ```ts
		 * type T = Tx.Array.ToUnion<["hello", "world"]>;
		 * type T = "hello" | "world";
		 * ```
		 * @param {unknown[]} L  The target array
		 * @returns {unknown} The array as union type
		 */
		type ToUnion<L extends unknown[]> = _ToUnion<L>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Check if an array is a tuple
		 * @example
		 * ```ts
		 * type T = Tx.Array.IsTuple<["hello", "world"]>;
		 * type T = true;
		 * ```
		 * @param {unknown[]} L  The target array
		 * @returns {boolean} The array is a tuple or not
		 */
		type IsTuple<L extends unknown[]> = _IsTuple<L>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Fill an array of `T` with a length of `N`
		 * @example
		 * ```ts
		 * type T = Tx.Array.Fill<4, "test">;
		 * type T = ["test", "test", "test", "test"];
		 * ```
		 * @param {number} T  The length of the array
		 * @param {unknown} T  The type of every element of this array
		 * @returns {T[]} an array of `T` with a length of `N`
		 */
		type Fill<N extends number, T extends unknown> = _Fill<N, T>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Convert a readonly array into a readable array
		 * @example
		 * ```ts
		 * type T = Tx.Array.Readable<readonly ["hello", "world"]>;
		 * type T = ["hello", "world"];
		 * ```
		 * @param {readonly unknown[]} L  The readonly array
		 * @returns {boolean} The array convert to tuple
		 */
		type Readable<L extends readonly unknown[]> = _Readable<L>;
	}
}
