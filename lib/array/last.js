try {
	Object.defineProperty(global.Array.prototype, "last", {
		value: function () {
			return this.length ? this[this.length - 1] : undefined;
		},
	});
} catch (error) {
	void 0;
}
module.exports = {};
