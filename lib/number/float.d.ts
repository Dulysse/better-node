declare global {
  interface Number {
    /**
     * `From @dulysse1/better-node`
     * ### Set a new levell of precision to your float number
     * @param precision Your level of precision for this number
     * @default 1
     * @returns {number} your number updated
     */
    float(precision?: number): number;
  }
}
export = {};