import { 
  _Sub,
  _Add,
  _Greater,
  _Lower,
  _GreaterEq,
  _LowerEq,
  _Negate,
  _IsPositive,
  _IsNegative,
  _IsZero,
  _Range,
  _Enum,
  _Incr,
  _Decr,
  _Between,
  _Multiply,
  _Divide,
  _IsOdd,
  _IsEven
} from "./_number";
import { IterationOf, Pos } from "./iterations";

declare global {
  namespace Tx {
    namespace Number {
      type Sub<N1 extends number, N2 extends number> = N1 extends unknown ? N2 extends unknown ? Pos<_Sub<IterationOf<N1>, IterationOf<N2>>> : never : never;
      type Add<N1 extends number, N2 extends number> = N1 extends unknown ? N2 extends unknown ? Pos<_Add<IterationOf<N1>, IterationOf<N2>>> : never : never;
      type Multiply<N1 extends number, N2 extends number> = N1 extends unknown ? N2 extends unknown ? Pos<_Multiply<IterationOf<N1>, IterationOf<N2>>> : never : never;
      type Divide<N1 extends number, N2 extends number> = N1 extends unknown ? N2 extends unknown ? Pos<_Divide<IterationOf<N1>, IterationOf<N2>>> : never : never;
      type IsPositive<N extends number> = _IsPositive<IterationOf<N>>;
      type IsNegative<N extends number> = _IsNegative<IterationOf<N>>;
      type IsZero<N extends number> = _IsZero<IterationOf<N>>;
      type Greater<N1 extends number, N2 extends number> = _Greater<IterationOf<N1>, IterationOf<N2>>;
      type Lower<N1 extends number, N2 extends number> = _Lower<IterationOf<N1>, IterationOf<N2>>;
      type GreaterEq<N1 extends number, N2 extends number> = _GreaterEq<IterationOf<N1>, IterationOf<N2>>;
      type LowerEq<N1 extends number, N2 extends number> = _LowerEq<IterationOf<N1>, IterationOf<N2>>;
      type Negate<N extends number> = _Negate<IterationOf<N>>;
      type Enum<N extends number, Way="->"> = _Enum<IterationOf<N>, Way>;
      type Range<N1 extends number, N2 extends number> = _Range<IterationOf<N1>, IterationOf<N2>>;
      type Incr<N extends number> = _Incr<IterationOf<N>>;
      type Decr<N extends number> = _Decr<IterationOf<N>>;
      type Between<N extends number, From extends number, To extends number> = _Between<IterationOf<N>, IterationOf<From>, IterationOf<To>>;
      type IsEven<N extends number> = _IsEven<IterationOf<N>>;
      type IsOdd<N extends number> = _IsOdd<IterationOf<N>>;
    }
  }
}

export {}