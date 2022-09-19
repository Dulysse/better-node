import { _Cast, _Or } from "./operators";
import { 
  Iteration, 
  IterationOf,
  Pos,
  Prev,
  Next,
  IterationMap
} from "./iterations";

export declare type _SubPositive<N1 extends Iteration, N2 extends Iteration> = {
  0: _SubPositive<Prev<N1>, Prev<N2>>;
  1: N1;
  2: number;
}[Pos<N2> extends 0 ? 1 : number extends Pos<N2> ? 2 : 0];

export declare type _SubNegative<N1 extends Iteration, N2 extends Iteration> = {
  0: _SubNegative<Next<N1>, Next<N2>>;
  1: N1;
  2: number;
}[Pos<N2> extends 0 ? 1 : number extends Pos<N2> ? 2 : 0];

export declare type _AddPositive<N1 extends Iteration, N2 extends Iteration> = {
  0: _AddPositive<Next<N1>, Prev<N2>>;
  1: N1;
  2: IterationOf<number>;
}[Pos<N2> extends 0 ? 1 : number extends Pos<N2> ? 2 : 0];

export declare type _AddNegative<N1 extends Iteration, N2 extends Iteration> = {
  0: _AddNegative<Prev<N1>, Next<N2>>;
  1: N1;
  2: number;
}[Pos<N2> extends 0 ? 1 : number extends Pos<N2> ? 2 : 0];

export declare type SubPositive<N1 extends Iteration, N2 extends Iteration> = _SubPositive<N1, N2> extends infer X ? _Cast<X, Iteration> : never;
export declare type SubNegative<N1 extends Iteration, N2 extends Iteration> = _SubNegative<N1, N2> extends infer X ? _Cast<X, Iteration> : never;
export declare type AddPositive<N1 extends Iteration, N2 extends Iteration> = _AddPositive<N1, N2> extends infer X ? _Cast<X, Iteration> : never;
export declare type AddNegative<N1 extends Iteration, N2 extends Iteration> = _AddNegative<N1, N2> extends infer X ? _Cast<X, Iteration> : never;

export declare type _IsPositive<N extends Iteration> = {
  '-': false;
  '+': true;
  '0': false;
}[N[1]];

export declare type _IsNegative<N extends Iteration> = {
  '-': true;
  '+': false;
  '0': false;
}[N[1]];

export declare type _IsZero<N extends Iteration> = {
  '-': false;
  '+': false;
  '0': true;
}[N[1]];

export declare type _Sub<N1 extends Iteration, N2 extends Iteration> = {
  'false': SubPositive<N1, N2>;
  'true': SubNegative<N1, N2>;
}[`${_IsNegative<N2>}`];
export declare type _Add<N1 extends Iteration, N2 extends Iteration> = {
  'false': AddPositive<N1, N2>;
  'true': AddNegative<N1, N2>;
}[`${_IsNegative<N2>}`];
export declare type _Negate<N extends Iteration> = IterationMap[N[4]];
export declare type _Greater<N1 extends Iteration, N2 extends Iteration> = _IsPositive<_Sub<N1, N2>>;
export declare type _Lower<N1 extends Iteration, N2 extends Iteration> = _IsNegative<_Sub<N1, N2>>;
export declare type _GreaterEq<N1 extends Iteration, N2 extends Iteration, Result=_Sub<N1, N2>> = _Or<_IsPositive<Result>, _IsZero<Result>>;
export declare type _LowerEq<N1 extends Iteration, N2 extends Iteration, Result=_Sub<N1, N2>> = _Or<_IsNegative<Result>, _IsZero<Result>>;
