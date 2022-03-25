try {
  Object.defineProperty(
    global.Array.prototype,
    'insert',
    {
      value: function(element, index) {
        if(
          typeof index !== "number" ||
          index < 0 
        ) throw new Error("TypeError: Index should be an integer.");
        const [
          start_array,
          end_array
        ] = [
          this.slice(0, index),
          this.slice(index, this.length)
        ];
        start_array.push(element);
        const final = start_array.concat(end_array);
        for (let i = 0; i < final.length; i++) {
          (this.length >= i) ?
            this[i] = final[i] :
            this.push(final[i]);
        }
        return this;
      }
    }
  );
} catch (error) {
  void 0;
}
module.exports = {};