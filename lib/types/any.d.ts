import { 
  _Equal,
  _NotEqual, 
  _Cast,
  _And,
  _Or
} from "./operators";

declare global {
  namespace T {
    namespace Any {
      /**
       * `From @dulysse1/better-node`
       * ### If T1 => T2 : T1 else T2
       * @param {any} T1 Primary type
       * @param {any} T2 Compare to T1 
       * @returns T1 || T2 
       */
      type Cast<T1 extends any, T2 extends any> = _Cast<T1, T2>;
      /**
       * `From @dulysse1/better-node`
       * ### If T1 === T2 : true
       * @param {any} T1 First type
       * @param {any} T2 Second type 
       * @returns {boolean} true || false
       */
      type Equal<T1 extends any, T2 extends any> = _Equal<T1, T2>;
      /**
       * `From @dulysse1/better-node`
       * ### If T1 !== T2 : true
       * @param {any} T1 First type
       * @param {any} T2 Second type 
       * @returns {boolean} true || false
       */
      type NotEqual<T1 extends any, T2 extends any> = _NotEqual<T1, T2>;
       /**
       * `From @dulysse1/better-node`
       * ### If B1 === true && B2 === true
       * @param {boolean} B1 First condition
       * @param {boolean} B2 Second condition 
       * @returns {boolean} true || false
       */
      type And<B1 extends boolean, B2 extends boolean> = _And<B1, B2>;
        /**
       * `From @dulysse1/better-node`
       * ### If B1 === true || B2 === true
       * @param {boolean} B1 First condition
       * @param {boolean} B2 Second condition 
       * @returns {boolean} true || false
       */
      type Or<B1 extends boolean, B2 extends boolean> = _Or<B1, B2>;
    }
  } 
}

export {}