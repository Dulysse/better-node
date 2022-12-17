import { _ToUnion } from "../types/_array";

type ObjectKeys<T> =
    T extends object ? (keyof T)[] :
    T extends number ? [] :
    T extends Array<any> | string ? string[] :
    never;

type ObjectValues<T> =
  T extends { [key: string]: infer R } ? R[] :
  T extends number ? [] :
  T extends Array<any> | string ? string[] :
  never;


declare global {
  interface ObjectConstructor {
    keys<T>(o: T): ObjectKeys<T>;
    entries<T>(o: T): [
      _ToUnion<ObjectKeys<T>>,
      _ToUnion<ObjectValues<T>>
    ][];
    values<T>(o: T): ObjectValues<T>;
    /**
     * `From @dulysse1/better-node`
     * ### Make an exact copy of your object in memory
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
     * @returns {T} your object copied in memory
     */
    copy<T>(o: T): T extends object ? T : Error;
  }
  interface Object {
    /**
     * `From @dulysse1/better-node`
     * ### Make a copy of an object
     * @returns {this} your object copied in memory
     */
    copy(): this;
    /**
     * `From @dulysse1/better-node`
     * ### Get list of object entries
     * @returns your object entries as array
     */
    entries(): [
      string | symbol | number,
      unknown
    ][];
    /**
     * `From @dulysse1/better-node`
     * ### Get list of object keys
     * @returns object keys as array
     */
    keys(): string | symbol | number[];
    /**
     * `From @dulysse1/better-node`
     * ### Get list of object values
     * @returns object values as array
     */
    values(): unknown[];
    /**
     * `From @dulysse1/better-node`
     * ### Make an object iterable called by the semantics of the for-of statement.
     * @returns the object with `[Symbol.iteration]` method
     */
    iterable<T extends Object[number] = Object["entries"]>(fn: T): ReturnType<T>;
  }
}
export {};
