/// <reference path="operators.d.ts" />

namespace Tx {
  namespace Any {
    /**
     * @from `@dulysse1/better-node`
     * ### If T1 extends T2 ? T1 : T2
     * @example 
     * ```ts
     * type T = Tx.Any.Cast<"hello", number>;
     * type T = number;
     * ```
     * @param {any} T1 Primary type
     * @param {any} T2 Compare to T1 
     * @returns T1 or T2 
     */
    type Cast<T1 extends any, T2 extends any> = _Cast<T1, T2>;
    /**
     * @from `@dulysse1/better-node`
     * ### If T1 === T2 : true
     * @example 
     * ```ts
     * type T = Tx.Any.Equal<"hello", "hello2">;
     * type T = false;
     * ```
     * @param {any} T1 First type
     * @param {any} T2 Second type 
     * @returns {boolean} a boolean
     */
    type Equal<T1 extends any, T2 extends any> = _Equal<T1, T2>;
    /**
     * @from `@dulysse1/better-node`
     * ### If T1 !== T2 : true
     * @example 
     * ```ts
     * type T = Tx.Any.NotEqual<"hello", "hello2">;
     * type T = true;
     * ```
     * @param {any} T1 First type
     * @param {any} T2 Second type 
     * @returns {boolean} a boolean
     */
    type NotEqual<T1 extends any, T2 extends any> = _NotEqual<T1, T2>;
    /**
     * @from `@dulysse1/better-node`
     * ### If B1 === true && B2 === true
     * @example 
     * ```ts
     * type T = Tx.Any.And<true, false>;
     * type T = false;
     * ```
     * @param {boolean} B1 First condition
     * @param {boolean} B2 Second condition 
     * @returns {boolean} a boolean
     */
    type And<B1 extends boolean, B2 extends boolean> = _And<B1, B2>;
    /**
     * @from `@dulysse1/better-node`
     * ### If B1 === true || B2 === true
     * @example 
     * ```ts
     * type T = Tx.Any.Or<true, false>;
     * type T = true;
     * ```
     * @param {boolean} B1 First condition
     * @param {boolean} B2 Second condition 
     * @returns {boolean} a boolean
     */
    type Or<B1 extends boolean, B2 extends boolean> = _Or<B1, B2>;
    /**
     * @from `@dulysse1/better-node`
     * ### `true` -> `false` || `false` -> `true` 
     * @example 
     * ```ts
     * type T = Tx.Any.Not<true>;
     * type T = false;
     * ```
     * @param {boolean} B The target condition
     * @returns {boolean} the negate boolean of `B`
     */
    type Not<B extends boolean> = _Not<B>;
  }
} 
