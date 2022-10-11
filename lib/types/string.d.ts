import { 
  _At,
  _Length,
  _Split,
  _IndexOf,
  _LastIndexOf,
  _Replace,
  _ReplaceAll,
  _Reverse,
  _Slice,
  _First,
  _Last
} from "./_string";

declare global {
  namespace Tx {
    namespace String {
      /**
       * `From @dulysse1/better-node`
       * ### Get the `first` element of a string 
       * @example 
       * ```ts
       * type T = Tx.String.First<"hello">;
       * type T = "h";
       * ```
       * @param {string} T  The target string
       * @returns {string} The `first` element of the string
      */
      type First<T extends string> = _First<T>;
      /**
        * `From @dulysse1/better-node`
        * ### Get the `last` element of a string 
        * @example 
        * ```ts
        * type T = Tx.String.Last<"hello">;
        * type T = "o";
        * ```
        * @param {string} T  The target string
        * @returns {string} The `last` element of the string
      */
      type Last<T extends string> = _Last<T>;
      /**
       * `From @dulysse1/better-node`
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
      type Split<T extends string, S=""> = S extends string ? _Split<T, S> : never;
      /**
       * `From @dulysse1/better-node`
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
      type At<T extends string, I extends number> = _At<T, I>;
      /**
       * `From @dulysse1/better-node`
       * ### Get the length of a string
       * @example 
       * ```ts
       * type T = Tx.String.Length<"hello">; 
       * type T = 5;
       * ```
       * @param {string} T  The target string
       * @returns {number} The length of the string
      */
      type Length<T extends string> = _Length<T>;
      /**
       * `From @dulysse1/better-node`
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
      type IndexOf<T extends string, S extends string> = _IndexOf<T, S>;
      /**
       * `From @dulysse1/better-node`
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
       type LastIndexOf<T extends string, S extends string> = _LastIndexOf<T, S>;
      /**
       * `From @dulysse1/better-node`
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
      type Replace<T extends string, From extends string, To extends string> = _Replace<T, From, To>;
      /**
       * `From @dulysse1/better-node`
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
      type ReplaceAll<T extends string, From extends string, To extends string> = _ReplaceAll<T, From, To>;
      /**
       * `From @dulysse1/better-node`
       * ### Reverse a string
       * @example 
       * ```ts
       * type T = Tx.String.Reverse<"hello">;
       * type T = "olleh";
       * ```
       * @param {string} T  The target string
       * @returns {string} The string reversed 
      */
      type Reverse<T extends string> = _Reverse<T>;
      /**
       * `From @dulysse1/better-node`
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
      type Slice<T extends string, Start=0, End=Length<T>> = _Slice<T, Start, End>;
    }
  }
}

export {}