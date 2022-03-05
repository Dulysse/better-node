declare global {
    interface Array<T> {
      /**
       * `From @dulysse1/better-node`
       * ### Insert an element in your array
       * @param element Element that you want to insert
       * @param index Index where you want to insert your element
       * @returns {T[]} your final array 
       */
      insert(element: any, index: number): T[];
    }
  }
  export {};