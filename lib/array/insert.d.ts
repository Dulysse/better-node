declare global {
    interface Array<T> {
      /**
       * `From @dulysse1/better-node`
       * ### Insert an element in your array at specified index
       * @param element Element that you want to insert
       * @param index Index where you want to insert your element in your array
       * @returns {(C | T)[]} your final array 
       */
      insert<C>(element: C, index: number): (C | T)[];
    }
  }
  export {};