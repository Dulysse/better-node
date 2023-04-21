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
		 * @param {unknown[]} TArray  The target array
		 * @returns {unknown[]} The array updated
		 */
		type Pop<TArray extends unknown[]> = _Satisfy<
			_IsTuple<TArray> extends true ? _Pop<TArray> : TArray,
			unknown[]
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get an array without the `first` element
		 * @example
		 * ```ts
		 * type T = Tx.Array.Shift<[1, 2, 3, 4]>;
		 * type T = [2, 3, 4];
		 * ```
		 * @param {unknown[]} TArray  The target array
		 * @returns {unknown[]} The array updated
		 */
		type Shift<TArray extends unknown[]> = _Satisfy<
			_IsTuple<TArray> extends true ? _Shift<TArray> : TArray,
			unknown[]
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Join array items to a string with a separator
		 * @example
		 * ```ts
		 * type T = Tx.Array.Join<[1, 2, 3, 4], "/">;
		 * type T = "1/2/3/4";
		 * ```
		 * @param {unknown[]} TArray  The target array
		 * @param {string} S The char separator
		 * @returns {string} The string of the array elements joined
		 */
		type Join<TArray extends unknown[], S extends string = ","> = _Satisfy<
			_IsTuple<TArray> extends true ? _Join<TArray, S> : string,
			string
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the length of an array
		 * @example
		 * ```ts
		 * type T = Tx.Array.Length<[1, 2, 3, 4]>;
		 * type T = 4;
		 * ```
		 * @param {unknown[]} TArray  The target array
		 * @returns {number} The length of the array
		 */
		type Length<TArray extends unknown[]> = _Satisfy<
			_IsTuple<TArray> extends true ? _Length<TArray> : number,
			number
		>;
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
			TArray extends unknown[],
			From extends unknown,
			To extends unknown
		> = _Satisfy<
			_IsTuple<TArray> extends true
				? _Replace<TArray, From, To>
				: (TArray[number] | To)[],
			unknown[]
		>;
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
			TArray extends unknown[],
			From extends unknown,
			To extends unknown
		> = _IsTuple<TArray> extends true
			? _ReplaceAll<TArray, From, To>
			: (TArray[number] | To)[];
		/**
		 * @from `@dulysse1/better-node`
		 * ### Reverse an array
		 * @example
		 * ```ts
		 * type T = Tx.Array.Reverse<[true, 2, 3, "4"]>;
		 * type T = ["4", 3, 2, true];
		 * ```
		 * @param {unknown[]} TArray  The target array
		 * @returns {unknown[]} The array reversed
		 */
		type Reverse<TArray extends unknown[]> = _Satisfy<
			_IsTuple<TArray> extends true ? _Reverse<TArray> : TArray,
			unknown[]
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the `first` element of an array
		 * @example
		 * ```ts
		 * type T = Tx.Array.First<[1, 2, 3, 4]>;
		 * type T = 1;
		 * ```
		 * @param {unknown[]} TArray  The target array
		 * @returns {unknown[]} The `first` element of the array
		 */
		type First<TArray extends unknown[]> = _Satisfy<
			_IsTuple<TArray> extends true ? _First<TArray> : TArray[number],
			unknown[]
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the `last` element of an array
		 * @example
		 * ```ts
		 * type T = Tx.Array.Last<[1, 2, 3, 4]>;
		 * type T = 4;
		 * ```
		 * @param {unknown[]} TArray  The target array
		 * @returns {unknown[]} The `last` element of the array
		 */
		type Last<TArray extends unknown[]> = _Satisfy<
			_IsTuple<TArray> extends true ? _Last<TArray> : TArray[number],
			unknown[]
		>;
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
		 * @param {unknown[]} TArray  The target array
		 * @param {unknown} T The element to find
		 * @returns {number} The `first` index of the element in the array or `-1`
		 */
		type IndexOf<TArray extends unknown[], T extends unknown> = _Satisfy<
			_IsTuple<TArray> extends true ? _IndexOf<TArray, T> : number,
			number
		>;
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
		 * @param {unknown[]} TArray  The target array
		 * @param {unknown} T The element to find
		 * @returns {number} The `last` index of the element in the array or `-1`
		 */
		type LastIndexOf<TArray extends unknown[], T extends unknown> = _Satisfy<
			_IsTuple<TArray> extends true ? _LastIndexOf<TArray, T> : number,
			number
		>;
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
		 * @param {unknown[]} TArray  The target array
		 * @param {unknown} T The element to find
		 * @returns {boolean} A boolean
		 */
		type Includes<TArray extends unknown[], T extends unknown> = _Satisfy<
			_IsTuple<TArray> extends true ? _Includes<TArray, T> : boolean,
			boolean
		>;
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
		 * @param {unknown[]} TArray  The target array
		 * @param {unknown} T The element to find
		 * @param {() => unknown} F The filter function
		 * @returns {unknown} An element of the array founded or `null`
		 */
		type Find<TArray extends unknown[], F extends () => unknown> = _Satisfy<
			_IsTuple<TArray> extends true ? _Find<TArray, F> : TArray[number] | null,
			unknown
		>;
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
		 * @param {unknown[]} TArray  The target array
		 * @param {unknown} T The element to find
		 * @param {() => unknown} F The filter function
		 * @returns {unknown[]} All elements of the array founded or `[]`
		 */
		type Filter<TArray extends unknown[], F extends () => unknown> = _Satisfy<
			_IsTuple<TArray> extends true ? _Filter<TArray, F> : TArray,
			unknown[]
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Parse an array to string
		 * @example
		 * ```ts
		 * type T = Tx.Array.ToString<[1, 2, 3, {}]>;
		 * type T = "1,2,3,[object Object]"
		 * ```
		 * @param {unknown[]} TArray  The target array
		 * @returns {string} The array as string
		 */
		type ToString<TArray extends unknown[]> = _Satisfy<
			_IsTuple<TArray> extends true ? _ToString<TArray> : string,
			string
		>;
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
			TArray extends unknown[],
			Start extends number = 0,
			DeleteCount extends number = _Length<TArray>
		> = _Satisfy<
			_IsTuple<TArray> extends true
				? _Splice<TArray, Start, DeleteCount>
				: TArray,
			unknown[]
		>;
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
			TArray extends unknown[],
			Start extends number = 0,
			End extends number = Length<TArray>
		> = _Satisfy<
			_IsTuple<TArray> extends true ? _Slice<TArray, Start, End> : TArray,
			unknown[]
		>;
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
		type Concat<L1 extends unknown[], L2 extends unknown[]> = _Satisfy<
			_And<_IsTuple<L1>, _IsTuple<L2>> extends true
				? _Concat<L1, L2>
				: (L1[number] | L2[number])[],
			unknown[]
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Push an element to an array
		 * @example
		 * ```ts
		 * type T = Tx.Array.Push<[1, 2, 3], 4>;
		 * type T = [1, 2, 3, 4];
		 * ```
		 * @param {unknown[]} TArray  The target array
		 * @param {unknown} T  The element to push
		 * @returns {unknown[]} The array with the pushed element
		 */
		type Push<TArray extends unknown[], T extends unknown> = _Satisfy<
			_IsTuple<TArray> extends true ? _Push<TArray, T> : (TArray[number] | T)[],
			unknown[]
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Drop from an array all exactly matching elements
		 * @example
		 * ```ts
		 * type T = Tx.Array.Drop<[1, 2, 3, 4, 1], 1>;
		 * type T = [2, 3, 4];
		 * ```
		 * @param {unknown[]} TArray  The target array
		 * @param {unknown} T  The element to remove
		 * @returns {unknown[]} The array without the dropped elements
		 */
		type Drop<TArray extends unknown[], T extends unknown> = _Satisfy<
			_IsTuple<TArray> extends true ? _Drop<TArray, T> : TArray,
			unknown[]
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Insert an element in an array at a specific index
		 * @example
		 * ```ts
		 * type T = Tx.Array.Insert<[1, 2, 3, 4], 2, 5>;
		 * type T = [1, 2, 5, 3, 4];
		 * ```
		 * @param {unknown[]} TArray  The target array
		 * @param {number} I The index of the pushed element
		 * @param {unknown} T  The element to push
		 * @returns {unknown[]} The array with the new element
		 */
		type Insert<
			TArray extends unknown[],
			I extends number,
			T extends unknown
		> = _Satisfy<
			_IsTuple<TArray> extends true
				? _Insert<TArray, I, T>
				: (TArray[number] | T)[],
			unknown[]
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Check the type of the array
		 * @example
		 * ```ts
		 * type T = Tx.Array.Of<["hello"], string>;
		 * type T = true;
		 * ```
		 * @param {unknown[]} TArray  The target array
		 * @param {unknown} T  The type to check
		 * @returns {boolean} A boolean at true if the array and type match
		 */
		type Of<TArray extends unknown[], T extends unknown> = _Satisfy<
			_Of<TArray, T>,
			boolean
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Create a new array with all sub-array elements concatenated into it recursively up to the specified depth
		 * @example
		 * ```ts
		 * type T = Tx.Array.Flat<["hello", [1, 2, 3]]>;
		 * type T = ["hello", 1, 2, 3];
		 * ```
		 * @param {unknown[]} TArray  The target array
		 * @param {number} Depth  The depth of concatenation
		 * @default 1
		 * @returns {unknown[]} The array concatenated `depth` time(s)
		 */
		type Flat<TArray extends unknown[], Depth extends number = 1> = _Satisfy<
			_IsTuple<TArray> extends true ? _Flat<TArray, Depth> : TArray,
			unknown[]
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the element at an index of the array
		 * @example
		 * ```ts
		 * type T = Tx.Array.At<[1, 2, "3", 4, 5], 2>;
		 * type T = "3";
		 * ```
		 * @param {unknown[]} TArray  The target array
		 * @param {number} I The index of the array
		 * @returns {unknown} The element at that index of `undefined`
		 */
		type At<TArray extends unknown[], I extends number> = _Satisfy<
			_IsTuple<TArray> extends true ? _At<TArray, I> : TArray[number],
			unknown
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Sort an array of numbers in ascending order
		 * @example
		 * ```ts
		 * type T = Tx.Array.Asc<[5, 2, 1, 4, 3]>;
		 * type T = [1, 2, 3, 4, 5];
		 * ```
		 * @param {number[]} TArray  The target array
		 * @returns {number[]} The array sorted
		 */
		type Asc<TArray extends number[]> = _Satisfy<
			_IsTuple<TArray> extends true ? _Asc<TArray> : number[],
			number[]
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Sort an array of numbers in descending order
		 * @example
		 * ```ts
		 * type T = Tx.Array.Desc<[5, 2, 1, 4, 3]>;
		 * type T = [5, 4, 3, 2, 1];
		 * ```
		 * @param {number[]} TArray  The target array
		 * @returns {number[]} The array sorted
		 */
		type Desc<TArray extends number[]> = _Satisfy<
			_IsTuple<TArray> extends true ? _Desc<TArray> : number[],
			number[]
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the sum of all elements of an array of numbers
		 * @example
		 * ```ts
		 * type T = Tx.Array.Sum<[5, 2, 1, 4, 3]>;
		 * type T = 15
		 * ```
		 * @param {number[]} TArray  The target array
		 * @returns {number} The sum of the elements of the array
		 */
		type Sum<TArray extends number[]> = _Satisfy<
			_IsTuple<TArray> extends true ? _Sum<TArray> : number,
			number
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the `minimum` value of an element in an array of numbers
		 * @example
		 * ```ts
		 * type T = Tx.Array.Min<[5, 2, 1, 4, 3]>;
		 * type T = 1
		 * ```
		 * @param {number[]} TArray  The target array
		 * @returns {number} The minimum value of the array
		 */
		type Min<TArray extends number[]> = _Satisfy<
			_IsTuple<TArray> extends true ? _Min<TArray> : number,
			number
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Get the `maximum` value of an element in an array of numbers
		 * @example
		 * ```ts
		 * type T = Tx.Array.Max<[5, 2, 1, 4, 3]>;
		 * type T = 5
		 * ```
		 * @param {number[]} TArray  The target array
		 * @returns {number} The maximum value of the array
		 */
		type Max<TArray extends number[]> = _Satisfy<
			_IsTuple<TArray> extends true ? _Max<TArray> : number,
			number
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Check if an array of numbers is sorted in `ASC` or `DESC`
		 * @example
		 * ```ts
		 * type T = Tx.Array.IsSorted<[5, 2, 1, 4, 3], "ASC">;
		 * type T = false
		 * ```
		 * @param {number[]} TArray  The target array
		 * @param {"ASC"|"DESC"} Type "ASC" or "DESC"
		 * @returns {boolean} A boolean at true if the array is sorted
		 */
		type IsSorted<
			TArray extends number[],
			Type extends "ASC" | "DESC"
		> = _Satisfy<
			_IsTuple<TArray> extends true ? _IsSorted<TArray, Type> : boolean,
			boolean
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Transform an array to an union
		 * @example
		 * ```ts
		 * type T = Tx.Array.ToUnion<["hello", "world"]>;
		 * type T = "hello" | "world";
		 * ```
		 * @param {unknown[]} TArray  The target array
		 * @returns {unknown} The array as union type
		 */
		type ToUnion<TArray extends unknown[]> = _Satisfy<
			_ToUnion<TArray>,
			unknown
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Check if an array is a tuple
		 * @example
		 * ```ts
		 * type T = Tx.Array.IsTuple<["hello", "world"]>;
		 * type T = true;
		 * ```
		 * @param {unknown[]} TArray  The target array
		 * @returns {boolean} The array is a tuple or not
		 */
		type IsTuple<TArray extends unknown[]> = _Satisfy<
			_IsTuple<TArray>,
			boolean
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Fill an array of `T` with a length of `N`
		 * @example
		 * ```ts
		 * type T = Tx.Array.Fill<4, "test">;
		 * type T = ["test", "test", "test", "test"];
		 * ```
		 * @param {number} N  The length of the array
		 * @param {unknown} T  The type of every element of this array
		 * @returns {unknown[]} an array of `T` with a length of `N`
		 */
		type Fill<N extends number, T extends unknown> = _Satisfy<
			_Fill<N, T>,
			unknown[]
		>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Convert a readonly array into a readable array
		 * @example
		 * ```ts
		 * type T = Tx.Array.Readable<readonly ["hello", "world"]>;
		 * type T = ["hello", "world"];
		 * ```
		 * @param {readonly unknown[]} TArray  The readonly array
		 * @returns {boolean} The array convert to tuple
		 */
		type Readable<TArray extends readonly unknown[]> = _Satisfy<
			_Readable<TArray>,
			boolean
		>;
	}
}
