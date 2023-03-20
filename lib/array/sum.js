try {
	Object.defineProperty(global.Array.prototype, "sum", {
		value: function () {
			if (this.length === 0) return 0;
			let sum = 0;
			for (let i = 0; i < this.length; i++) {
				const item = this[i];
				if (typeof item !== "number")
					throw new Error(
						`TyperError: Element of index ${i} is not a number: "${this[i]}"`
					);
				sum += item;
			}
			return sum;
		},
	});
} catch (error) {
	void 0;
}
module.exports = {};
