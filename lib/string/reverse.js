try {
  Object.defineProperty(
    global.String.prototype, 
    'reverse', 
    {
      value: function() {
        let final = new String();
        for (let i = this.length - 1; i >= 0; i--) {
          final += this[i];
        }
        return final;
      }
    }
  );
} catch (error) {
  void 0;
}
module.exports = {};