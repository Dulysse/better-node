/// <reference path="../types/number.d.ts" />
/// <reference path="../types/operators.d.ts" />
interface Number {
  /**
   * @from `@dulysse1/better-node`
   * ### Check if your number is between two values
   * @param min Your min value 
   * @param max Your max value
   * @returns {boolean} True if your number is beetwen min and max.
   */
  between<
    Min extends number,
    Max extends number
  >(min: number, max: number): _Cast<Tx.Number.Between<Min, Max>, boolean>;
}