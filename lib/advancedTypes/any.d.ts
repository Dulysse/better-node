import { _Equal, _Cast } from "./operators";

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
    }
  } 
}

export {}