import { _Last, _Exclude, _ToArray, _Length } from "./_union";

declare global {
  namespace Tx {
    namespace Union {
      /**
       * `From @dulysse1/better-node`
       * ### Get the last item of an union
       * @example 
       * ```ts
       * type T = Tx.Union.Last<"hello" | "world">;
       * type T = "world";
       * ```
       * @param {any} U  The target union type
       * @returns {any} The last union item or `never`
      */
      type Last<U extends any> = _Last<U>;
      /**
       * `From @dulysse1/better-node`
       * ### Exclude an item of an union
       * @example 
       * ```ts
       * type T = Tx.Union.Exclude<"hello" | "world", "world">;
       * type T = "hello";
       * ```
       * @param {any} U  The target union type
       * @param {any} T The item to exclude
       * @returns {any} The union without the excluded item
      */
      type Exclude<U extends any, T extends any> = _Exclude<U, T>;
      /**
       * `From @dulysse1/better-node`
       * ### Transform an union to an array
       * @example 
       * ```ts
       * type T = Tx.Union.ToArray<"hello" | "world">;
       * type T = ["hello", "world"];
       * ```
       * @param {any} U  The target union type
       * @returns {any[]} The union as array
      */
      type ToArray<U extends any> = _ToArray<U>;
      /**
       * `From @dulysse1/better-node`
       * ### get the length of the union
       * @example 
       * ```ts
       * type T = Tx.Union.Length<"hello" | "world">;
       * type T = 2;
       * ```
       * @param {any} U  The target union type
       * @returns {any[]} The length of the union
      */
       type Length<U extends any> = _Length<U>;
    }
  }
}

export {};