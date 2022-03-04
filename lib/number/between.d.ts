declare global {
  interface Number {
    /**
     * `From @dulysse1/better-node`
     * ### Check if your number is between two values
     * @param min Your min value 
     * @param max Your max value
     * @returns {boolean} True if your number is beetwen min and max.
     */
    between(min: number, max: number): boolean;
  }
}
export {};