const colorList = require('./data/color.list.json');
const colors = Object.entries(colorList);
for (let i = 0; i < colors.length; i++) {
  const [colorName, colorValue] = colors[i];
  try {
    if (!String.hasOwnProperty(colorName)) {
      Object.defineProperty(
        global.String.prototype,
        colorName,
        {
          get: function() {
            return `${colorValue}${this}\u001B[0m`;
          },
          enumerable: false,
          configurable: false
        }
      );
    }
  } catch (err) {
    continue;
  }
}
module.exports = {};