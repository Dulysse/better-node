try {
	Object.defineProperty(global.String.prototype, "first", {
		value: function () {
			return this.length ? this[0] : undefined;
		},
	});
} catch (error) {
	void 0;
}
module.exports = {};
