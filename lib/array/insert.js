Object.defineProperty(
    global.Array.prototype,
    'insert',
    {
      value: function(element, index) {
          if(index < 0){
            throw new Error("Index should be integer")
          }
            arr1 = this.slice(0, index)
            arr2 = this.slice(index, this.length)
            arr1.push(element)
            const final = arr1.concat(arr2)
            return final
          
          
      }
    }
  );
  module.exports = {};