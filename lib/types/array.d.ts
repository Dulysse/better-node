import { 
  _Join,
  _Length,
  _Pop,
  _Shift,
  _Replace,
  _ReplaceAll,
  _Reverse,
  _First,
  _Last,
  _IndexOf,
  _LastIndexOf,
  _Find,
  _Filter,
  _Includes,
  _ToString,
  _Splice,
  _Slice,
  _Concat,
  _Push,
  _Drop,
  _Insert,
  _Asc,
  _Desc,
  _Sum,
  _Average,
  _Of,
  _IsSorted,
  _Flat,
  _Min,
  _Max,
  _Median,
  _At,
  _ToUnion
} from "./_array";

declare global {
  namespace Tx {
    namespace Array {
      /**
       * `From @dulysse1/better-node`
       * ### Get an array without the `last` element
       * @example 
       * ```ts
       * type T = Tx.Array.Pop<[1, 2, 3, 4]>;
       * type T = [1, 2, 3];
       * ```
       * @param {any[]} L  The target array
       * @returns {any[]} The array updated
      */
      type Pop<L extends any[]> = _Pop<L>;
      /**
       * `From @dulysse1/better-node`
       * ### Get an array without the `first` element
       * @example 
       * ```ts
       * type T = Tx.Array.Shift<[1, 2, 3, 4]>;
       * type T = [2, 3, 4];
       * ```
       * @param {any[]} L  The target array
       * @returns {any[]} The array updated
      */
      type Shift<L extends any[]> = _Shift<L>;
      /**
       * `From @dulysse1/better-node`
       * ### Join array items to a string with a separator
       * @example 
       * ```ts
       * type T = Tx.Array.Join<[1, 2, 3, 4], "/">;
       * type T = "1/2/3/4";
       * ```
       * @param {any[]} L  The target array
       * @param {string} S The char separator
       * @returns {string} The string of the array elements joined
      */
      type Join<L extends any[], S=","> = S extends string ? _Join<L, S> : never;
      /**
       * `From @dulysse1/better-node`
       * ### Get the length of an array
       * @example 
       * ```ts
       * type T = Tx.Array.Length<[1, 2, 3, 4]>;
       * type T = 4;
       * ```
       * @param {any[]} L  The target array
       * @returns {number} The length of the array
      */
      type Length<L extends any[]> = _Length<L>;
      /**
       * `From @dulysse1/better-node`
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
       * @param {any[]} T  The target array
       * @param {any} From The element to replace
       * @param {any} To Will be replaced by
       * @returns {any[]} The array updated 
      */
      type Replace<L extends any[], From extends any, To extends any> = _Replace<L, From, To>;
      /**
       * `From @dulysse1/better-node`
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
       * @param {any[]} T  The target array
       * @param {any} From The element to replace
       * @param {any} To Will be replaced by
       * @returns {any[]} The array updated 
      */
      type ReplaceAll<L extends any[], From extends any, To extends any> = _ReplaceAll<L, From, To>;
      /**
       * `From @dulysse1/better-node`
       * ### Reverse an array
       * @example 
       * ```ts
       * type T = Tx.Array.Reverse<[true, 2, 3, "4"]>;
       * type T = ["4", 3, 2, true];
       * ```
       * @param {any[]} L  The target array
       * @returns {any[]} The array reversed
      */
      type Reverse<L extends any[]> = _Reverse<L>;
      /**
       * `From @dulysse1/better-node`
       * ### Get the `first` element of an array 
       * @example 
       * ```ts
       * type T = Tx.Array.First<[1, 2, 3, 4]>;
       * type T = 1;
       * ```
       * @param {any[]} L  The target array
       * @returns {any[]} The `first` element of the array
      */
      type First<L extends any[]> = _First<L>;
      /**
       * `From @dulysse1/better-node`
       * ### Get the `last` element of an array 
       * @example 
       * ```ts
       * type T = Tx.Array.Last<[1, 2, 3, 4]>;
       * type T = 4;
       * ```
       * @param {any[]} L  The target array
       * @returns {any[]} The `last` element of the array
      */
      type Last<L extends any[]> = _Last<L>;
      /**
       * `From @dulysse1/better-node`
       * ### Get the `first` index of an element in an array
       * @example 
       * ```ts
       * type T1 = Tx.Array.IndexOf<[1, 2, 3, 4], 5>;
       * type T1 = -1;
       * 
       * type T2 = Tx.Array.IndexOf<[1, 2, 3, 4], 3>;
       * type T2 = 2;
       * ```
       * @param {any[]} L  The target array
       * @param {any} T The element to find
       * @returns {number} The `first` index of the element in the array or `-1`
      */
      type IndexOf<L extends any[], T extends any> = _IndexOf<L, T>;
      /**
       * `From @dulysse1/better-node`
       * ### Get the `last` index of an element in an array
       * @example 
       * ```ts
       * type T1 = Tx.Array.LastIndexOf<[1, 2, 3, 4], 0>;
       * type T1 = -1;
       * 
       * type T2 = Tx.Array.LastIndexOf<[1, 2, 2, 2], 2>;
       * type T2 = 3;
       * ```
       * @param {any[]} L  The target array
       * @param {any} T The element to find
       * @returns {number} The `last` index of the element in the array or `-1`
      */
      type LastIndexOf<L extends any[], T extends any> = _LastIndexOf<L, T>;
      /**
       * `From @dulysse1/better-node`
       * ### Check if an array including an element
       * @example 
       * ```ts
       * type T1 = Tx.Array.Includes<[1, 2, 3, 4], 5>;
       * type T1 = false;
       * 
       * type T2 = Tx.Array.Includes<[1, 2, 3, 4], 2>;
       * type T2 = true;
       * ```
       * @param {any[]} L  The target array
       * @param {any} T The element to find
       * @returns {boolean} A boolean
      */
      type Includes<L extends any[], T extends any> = _Includes<L, T>;
      /**
       * `From @dulysse1/better-node`
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
       * @param {any[]} L  The target array
       * @param {any} T The element to find
       * @param {() => any} F The filter function
       * @returns {T} An element of the array founded or `null` 
      */
      type Find<L extends any[], F extends () => any> = _Find<L, F>;
      /**
       * `From @dulysse1/better-node`
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
       * @param {any[]} L  The target array
       * @param {any} T The element to find
       * @param {() => any} F The filter function
       * @returns {T} All elements of the array founded or `[]` 
      */
      type Filter<L extends any[], F extends () => any> = _Filter<L, F>;
      /**
       * `From @dulysse1/better-node`
       * ### Parse an array to string 
       * @example 
       * ```ts
       * type T = Tx.Array.ToString<[1, 2, 3, {}]>;
       * type T = "1,2,3,[object Object]"
       * ```
       * @param {any[]} L  The target array
       * @returns {string} The array as string
      */
      type ToString<L extends any[]> = _ToString<L>;
      /**
       * `From @dulysse1/better-node`
       * ### Splice an array by `start` and `deleteCount` indexes
       * @example 
       * ```ts
       * type T = Tx.Array.Splice<[1, 2, 3, 4], 2, 1>;
       * type T = [ 3 ];
       * ```
       * @param {any[]} T  The target array
       * @param {number} Start  The starting index
       * @default 0
       * @param {number} DeleteCount  The delete count
       * @default T['length']
       * @returns {any[]} The array spliced 
      */
      type Splice<L extends any[], Start=0, DeleteCount=_Length<L>> = _Splice<L, Start, DeleteCount>;
      /**
       * `From @dulysse1/better-node`
       * ### Slice an array by `start` and `end` indexes
       * @example 
       * ```ts
       * type T = Tx.Array.Slice<[1, 2, 3, 4], 2, 4>;
       * type T = [3, 4];
       * ```
       * @param {any[]} T  The target array
       * @param {number} Start  The starting slice index
       * @default 0
       * @param {number} End  The ending slice index
       * @default T['length']
       * @returns {any[]} The array sliced 
      */
      type Slice<L extends any[], Start=0, End=Length<L>> = _Slice<L, Start, End>;
      /**
       * `From @dulysse1/better-node`
       * ### Concatenate an array with another
       * @example 
       * ```ts
       * type T = Tx.Array.Concat<[1, 2, 3], [4, 5]>;
       * type T = [1, 2, 3, 4, 5];
       * ```
       * @param {any[]} L1  The first array
       * @param {any[]} L2  The second array
       * @returns {any[]} The two arrays concatenated
      */
      type Concat<L1 extends any[], L2 extends any[]> = _Concat<L1, L2>;
      /**
       * `From @dulysse1/better-node`
       * ### Push an element to an array
       * @example 
       * ```ts
       * type T = Tx.Array.Push<[1, 2, 3], 4>;
       * type T = [1, 2, 3, 4];
       * ```
       * @param {any[]} L  The target array
       * @param {any} T  The element to push       
       * @returns {any[]} The array with the pushed element
      */
      type Push<L extends any[], T extends any> = _Push<L, T>;
      /**
       * `From @dulysse1/better-node`
       * ### Drop from an array all exactly matching elements
       * @example
       * ```ts
       * type T = Tx.Array.Drop<[1, 2, 3, 4, 1], 1>;
       * type T = [2, 3, 4];
       * ```
       * @param {any[]} L  The target array
       * @param {any} T  The element to remove
       * @returns {any[]} The array without the dropped elements
      */
      type Drop<L extends any[], T extends any> = _Drop<L, T>;
      /**
       * `From @dulysse1/better-node`
       * ### Insert an element in an array at a specific index
       * @example
       * ```ts
       * type T = Tx.Array.Insert<[1, 2, 3, 4], 2, 5>;
       * type T = [1, 2, 5, 3, 4];
       * ```
       * @param {any[]} L  The target array
       * @param {number} I The index of the pushed element
       * @param {any} T  The element to push
       * @returns {any[]} The array with the new element
      */
      type Insert<L extends any[], I extends number, T extends any> = _Insert<L, I, T>;
      /**
       * `From @dulysse1/better-node`
       * ### Check the type of the array
       * @example
       * ```ts
       * type T = Tx.Array.Of<["hello"], string>;
       * type T = true;
       * ```
       * @param {any[]} L  The target array
       * @param {any} T  The type to check
       * @returns {boolean} A boolean at true if the array and type match
      */
      type Of<L extends any[], T extends any> = _Of<L, T>;
      /**
       * `From @dulysse1/better-node`
       * ### Create a new array with all sub-array elements concatenated into it recursively up to the specified depth
       * @example
       * ```ts
       * type T = Tx.Array.Flat<["hello", [1, 2, 3]]>;
       * type T = ["hello", 1, 2, 3];
       * ```
       * @param {any[]} L  The target array
       * @param {number} Depth  The depth of concatenation
       * @default 1
       * @returns {any[]} The array concatenated `depth` time(s)
      */
      type Flat<L extends any[], Depth=1> = _Flat<L, Depth>;
      /**
       * `From @dulysse1/better-node`
       * ### Get the element at an index of the array
       * @example
       * ```ts
       * type T = Tx.Array.At<[1, 2, "3", 4, 5], 2>;
       * type T = "3";
       * ```
       * @param {any[]} L  The target array
       * @param {number} I The index of the array
       * @returns {any} The element at that index of `undefined`
      */
      type At<L extends any[], I extends number> = _At<L, I>;
      /**
       * `From @dulysse1/better-node`
       * ### Sort an array of numbers in ascending order
       * @example
       * ```ts
       * type T = Tx.Array.Asc<[5, 2, 1, 4, 3]>;
       * type T = [1, 2, 3, 4, 5];
       * ```
       * @param {number[]} L  The target array
       * @returns {number[]} The array sorted
      */
      type Asc<L extends number[]> = _Asc<L>;
      /**
       * `From @dulysse1/better-node`
       * ### Sort an array of numbers in descending order
       * @example
       * ```ts
       * type T = Tx.Array.Desc<[5, 2, 1, 4, 3]>;
       * type T = [5, 4, 3, 2, 1];
       * ```
       * @param {number[]} L  The target array
       * @returns {number[]} The array sorted
      */
      type Desc<L extends number[]> = _Desc<L>;
      /**
       * `From @dulysse1/better-node`
       * ### Get the sum of all elements of an array of numbers
       * @example
       * ```ts
       * type T = Tx.Array.Sum<[5, 2, 1, 4, 3]>;
       * type T = 15
       * ```
       * @param {number[]} L  The target array
       * @returns {number} The sum of the elements of the array
      */
      type Sum<L extends number[]> = _Sum<L>;
      /**
       * `From @dulysse1/better-node`
       * ### Get the average of all elements of an array of numbers
       * @example
       * ```ts
       * type T = Tx.Array.Average<[5, 2, 1, 4, 3]>;
       * type T = 3
       * ```
       * @param {number[]} L  The target array
       * @returns {number} The average of the elements of the array
      */
      type Average<L extends number[]> = _Average<L>;
      /**
       * `From @dulysse1/better-node`
       * ### Get the `minimum` value of an element in an array of numbers
       * @example
       * ```ts
       * type T = Tx.Array.Min<[5, 2, 1, 4, 3]>;
       * type T = 1
       * ```
       * @param {number[]} L  The target array
       * @returns {number} The minimum value of the array
      */
      type Min<L extends number[]> = _Min<L>;
      /**
       * `From @dulysse1/better-node`
       * ### Get the `maximum` value of an element in an array of numbers
       * @example
       * ```ts
       * type T = Tx.Array.Max<[5, 2, 1, 4, 3]>;
       * type T = 5
       * ```
       * @param {number[]} L  The target array
       * @returns {number} The maximum value of the array
      */
      type Max<L extends number[]> = _Max<L>;
      /**
       * `From @dulysse1/better-node`
       * ### Get the median of all elements of an array of numbers
       * @example
       * ```ts
       * type T = Tx.Array.Average<[5, 2, 1, 4, 3]>;
       * type T = 3
       * ```
       * @param {number[]} L  The target array
       * @returns {number} The median of the elements of the array
      */
      type Median<L extends number[]> = _Median<L>;
      /**
       * `From @dulysse1/better-node`
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
      type IsSorted<L extends number[], Type extends ("ASC"|"DESC")> = _IsSorted<L, Type>;
      /**
       * `From @dulysse1/better-node`
       * ### Transform an array to an union
       * @example 
       * ```ts
       * type T = Tx.Array.ToUnion<["hello", "world"]>;
       * type T = "hello" | "world";
       * ```
       * @param {any[]} L  The target union type
       * @returns {any} The array as union type
      */
      type ToUnion<L extends any[]> = _ToUnion<L>; 
    }
  }
}

export {}