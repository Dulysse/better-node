/// <reference path="_object.d.ts" />

declare namespace Tx {
	namespace Object {
		/**
		 * @from `@dulysse1/better-node`
		 * ### Type global object
		 * @param {any} T Return type of object
		 * @default any
		 * @example
		 * ```ts
		 * type T = Tx.Object.Object;
		 * type T = { hello: "true" };
		 * ```
		 * @returns {Object} Object
		 */
		type Object<T = any> = _Object<T>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Merge `O1` and `O2`
		 * @example
		 * ```ts
		 * type T = Tx.Object.Merge<{ name: "françois" }, { age: 22 }>;
		 * type T = { name: "françois", age: 22 };
		 * ```
		 * @param {Object} O1 First Object
		 * @param {Object} O2 Second Object
		 * @returns {Object} The two object merged
		 */
		type Merge<O1 extends Object, O2 extends Object> = _Merge<O1, O2>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Omit an element from an object by `key`
		 * @example
		 * ```ts
		 * type T = Tx.Object.Omit<{ name: "françois", age: 22 }, "age">;
		 * type T = { name: "françois" };
		 * ```
		 * @param {Object} O The target Object
		 * @param {keyof Object} K The key to exclude
		 * @returns {Object} The object without the property of `K`
		 */
		type Omit<O extends Object, K extends keyof Object> = _Omit<O, K>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Make all properties of `O` not required
		 * @example
		 * ```ts
		 * type T = Tx.Object.Partial<{ name: "françois", age: 22 }>;
		 * type T = { name?: "françois", age?: 22 };
		 * ```
		 * @param {Object} O The target Object
		 * @returns {Object} The partial object
		 */
		type Partial<O extends Object> = _Partial<O>;
		/**
		 * @from `@dulysse1/better-node`
		 * ### Make all properties of `O` required
		 * @example
		 * ```ts
		 * type T = Tx.Object.Required<{ name: "françois", age?: 22 }>;
		 * type T = { name: "françois", age: 22 };
		 * ```
		 * @param {Object} O The target Object
		 * @returns {Object} The required object
		 */
		type Required<O extends Object> = _Required<O>;
	}
}
