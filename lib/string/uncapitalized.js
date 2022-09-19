const { separators } = require("./capitalized");
function _replaceSepWords(str, sep) {
  const char = str.split('').find(c => c === c.toUpperCase() && !separators.includes(c) && (!/[^a-zA-Z]/.test(c)));
  const index = str.indexOf(char);
  if(index === -1) return str;
  return _replaceSepWords(`${str.slice(0, index)}${sep}${str[index].toLowerCase()}${str.slice(index + 1)}`, sep);
}
try {
  Object.defineProperty(
    global.String.prototype, 
    'uncapitalized', 
    {
      value: function(sep, first=true) {
        if(sep && !separators.includes(sep)) {
          throw new Error(`InvalidSeparator: Uncapitalized separator must be: "${separators.join('" or "')}".`);
        } 
        if(!sep) {
          return this ? first ? this.charAt(0).toLowerCase() + this.slice(1) : this : this;
        }
        let str = this ? first ? this.charAt(0).toLowerCase() + this.slice(1) : this : this;
        str = _replaceSepWords(first ? str : str.slice(1), sep);
        return first ? str : this[0] + str;  
      }
    }
  );
} catch (error) {
  void 0;
}
module.exports = {};