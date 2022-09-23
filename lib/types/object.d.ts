import { 
  Object,
  _Merge
} from "./_object";

declare global {
  namespace Tx {
    namespace Object {
      /**
       * `From @dulysse1/better-node`
       * ### Type global object
       * @returns {Object} Object
       */
      type Object = Object;
      /**
       * `From @dulysse1/better-node`
       * ### Merge O1 and O2
       * @param {Object} O1 First Object
       * @param {Object} O2 Second Object 
       * @returns {Object} { ...O1, ...O2 }
       */
      type Merge<O1 extends Object, O2 extends Object> = _Merge<O1, O2>;
    }
  }
}

export {}