
/// <reference path="iterations.d.ts" />
/// <reference path="_number.d.ts" />

namespace Tx {
  namespace Number {
    /**
     * @from `@dulysse1/better-node`
     * ### Sub `N1` to `N2`
     * @example
     * ```ts
     * type T = Tx.Number.Sub<10, 6>;
     * type T = 4;
     * ```
     * @param {number} N1 First number
     * @param {number} N2 Second number
     * @returns {number} The result of the subtraction
    */
    type Sub<N1 extends number, N2 extends number> = N1 extends unknown ? N2 extends unknown ? Pos<_Sub<IterationOf<N1>, IterationOf<N2>>> : never : never;
    /**
     * @from `@dulysse1/better-node`
     * ### Add `N1` to `N2`
     * @example
     * ```ts
     * type T = Tx.Number.Add<10, 6>;
     * type T = 16;
     * ```
     * @param {number} N1 First number
     * @param {number} N2 Second number
     * @returns {number} The result of the addition
    */
    type Add<N1 extends number, N2 extends number> = N1 extends unknown ? N2 extends unknown ? Pos<_Add<IterationOf<N1>, IterationOf<N2>>> : never : never;
    /**
     * @from `@dulysse1/better-node`
     * ### Multiply `N1` with `N2`
     * @example
     * ```ts
     * type T = Tx.Number.Multiply<10, 6>;
     * type T = 60;
     * ```
     * @param {number} N1 First number
     * @param {number} N2 Second number
     * @returns {number} The result of the multiplication
    */
    type Multiply<N1 extends number, N2 extends number> = N1 extends unknown ? N2 extends unknown ? Pos<_Multiply<IterationOf<N1>, IterationOf<N2>>> : never : never;
    /**
     * @from `@dulysse1/better-node`
     * ### Divide `N1` by `N2`
     * @example
     * ```ts
     * type T = Tx.Number.Divide<12, 6>;
     * type T = 2;
     * ```
     * @param {number} N1 First number
     * @param {number} N2 Second number
     * @returns {number} The result of the division
    */
    type Divide<N1 extends number, N2 extends number> = N1 extends unknown ? N2 extends unknown ? Pos<_Divide<IterationOf<N1>, IterationOf<N2>>> : never : never;
    /**
     * @from `@dulysse1/better-node`
     * ### Check if `N1` is greater than `N2`
     * @example
     * ```ts
     * type T = Tx.Number.Greater<12, 6>;
     * type T = true;
     * ```
     * @param {number} N1 First number
     * @param {number} N2 Second number
     * @returns {number} A boolean at true if `N1` > `N2`
    */
    type Greater<N1 extends number, N2 extends number> = _Greater<IterationOf<N1>, IterationOf<N2>>;
    /**
     * @from `@dulysse1/better-node`
     * ### Check if `N1` is lower than `N2`
     * @example
     * ```ts
     * type T = Tx.Number.Lower<12, 6>;
     * type T = false;
     * ```
     * @param {number} N1 First number
     * @param {number} N2 Second number
     * @returns {number} A boolean at true if `N1` < `N2`
    */
    type Lower<N1 extends number, N2 extends number> = _Lower<IterationOf<N1>, IterationOf<N2>>;
    /**
     * @from `@dulysse1/better-node`
     * ### Check if `N1` is greater or equal to `N2`
     * @example
     * ```ts
     * type T = Tx.Number.GreaterEq<12, 6>;
     * type T = true;
     * ```
     * @param {number} N1 First number
     * @param {number} N2 Second number
     * @returns {number} A boolean at true if `N1` >= `N2`
    */
    type GreaterEq<N1 extends number, N2 extends number> = _GreaterEq<IterationOf<N1>, IterationOf<N2>>;
    /**
     * @from `@dulysse1/better-node`
     * ### Check if `N1` is lower or equal to `N2`
     * @example
     * ```ts
     * type T = Tx.Number.LowerEq<12, 6>;
     * type T = false;
     * ```
     * @param {number} N1 First number
     * @param {number} N2 Second number
     * @returns {number} A boolean at true if `N1` <= `N2`
    */
    type LowerEq<N1 extends number, N2 extends number> = _LowerEq<IterationOf<N1>, IterationOf<N2>>;
    /**
     * @from `@dulysse1/better-node`
     * ### Create a range array from `N1` to `N2`
     * @example
     * ```ts
     * type T = Tx.Number.Range<1, 6>;
     * type T = [1, 2, 3, 4, 5, 6]
     * ```
     * @param {number} N1 Start number
     * @param {number} N2 End number
     * @returns {number[]} A range of numbers
    */
    type Range<N1 extends number, N2 extends number> = _Range<IterationOf<N1>, IterationOf<N2>>;
    /**
     * @from `@dulysse1/better-node`
     * ### Enumerate a range of numbers from `zero` to `N`
     * @example
     * ```ts
     * type T = Tx.Number.Enum<5>;
     * type T = [0, 1, 2, 3, 4]
     * ```
     * @param {number} N Range size from `zero`
     * @param {"->"|"<-"} Way "->" OR "<-"
     * @returns {number[]} A range of numbers
    */
    type Enum<N extends number, Way extends _Way="->"> = _Enum<IterationOf<N>, Way>;
    /**
     * @from `@dulysse1/better-node`
     * ### Check if `N` is between two numbers or not
     * @example
     * ```ts
     * type T = Tx.Number.Between<5, 1, 30>;
     * type T = true
     * ```
     * @param {number} N Range size from `zero`
     * @param {number} From `N` is lower than this
     * @param {number} To `N` is greater than that
     * @returns {boolean} A boolean at true if `N` is between
    */
    type Between<N extends number, From extends number, To extends number> = _Between<IterationOf<N>, IterationOf<From>, IterationOf<To>>;
    /**
     * @from `@dulysse1/better-node`
     * ### Increment `N` by `one`
     * @example
     * ```ts
     * type T = Tx.Number.Incr<30>;
     * type T = 31
     * ```
     * @param {number} N The target number
     * @returns {number} The number incremented by `one`
    */
    type Incr<N extends number> = _Incr<IterationOf<N>>;
    /**
     * @from `@dulysse1/better-node`
     * ### Decrement `N` by `one`
     * @example
     * ```ts
     * type T = Tx.Number.Decr<30>;
     * type T = 29
     * ```
     * @param {number} N The target number
     * @returns {number} The number decremented by `one`
    */
    type Decr<N extends number> = _Decr<IterationOf<N>>;
    /**
     * @from `@dulysse1/better-node`
     * ### Get the opposite number of `N`
     * @example
     * ```ts
     * type T = Tx.Number.Negate<30>;
     * type T = -30
     * ```
     * @param {number} N The target number
     * @returns {number} The opposite number of `N`
    */
    type Negate<N extends number> = _Negate<IterationOf<N>>;
    /**
     * @from `@dulysse1/better-node`
     * ### Check if `N` is even
     * @example
     * ```ts
     * type T = Tx.Number.IsEven<30>;
     * type T = true
     * ```
     * @param {number} N The target number
     * @returns {boolean} A boolean at true if `N` is even
    */
    type IsEven<N extends number> = _IsEven<IterationOf<N>>;
    /**
     * @from `@dulysse1/better-node`
     * ### Check if `N` is odd
     * @example
     * ```ts
     * type T = Tx.Number.IsOdd<30>;
     * type T = false
     * ```
     * @param {number} N The target number
     * @returns {boolean} A boolean at true if `N` is odd
    */
    type IsOdd<N extends number> = _IsOdd<IterationOf<N>>;
    /**
     * @from `@dulysse1/better-node`
     * ### Check if `N` is positive
     * @example
     * ```ts
     * type T = Tx.Number.IsPositive<30>;
     * type T = true
     * ```
     * @param {number} N The target number
     * @returns {boolean} A boolean at true if `N` is positive
    */
    type IsPositive<N extends number> = _IsPositive<IterationOf<N>>;
    /**
     * @from `@dulysse1/better-node`
     * ### Check if `N` is negative
     * @example
     * ```ts
     * type T = Tx.Number.IsNegative<30>;
     * type T = false
     * ```
     * @param {number} N The target number
     * @returns {boolean} A boolean at true if `N` is negative
    */
    type IsNegative<N extends number> = _IsNegative<IterationOf<N>>;
    /**
     * @from `@dulysse1/better-node`
     * ### Check if `N` is zero
     * @example
     * ```ts
     * type T = Tx.Number.IsZero<30>;
     * type T = false
     * ```
     * @param {number} N The target number
     * @returns {boolean} A boolean at true if `N` is zero
    */
    type IsZero<N extends number> = _IsZero<IterationOf<N>>;
  }
}
