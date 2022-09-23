import { _And, _Cast, _Equal, _Or } from "./operators";
import { 
  Iteration, 
  IterationOf,
  Pos,
  Prev,
  Next,
  IterationMap
} from "./iterations";

export declare type _Way = '->' | '<-';

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

export declare type _Sub<
  N1 extends Iteration, 
  N2 extends Iteration
> = {
  'false': SubPositive<N1, N2>;
  'true': SubNegative<N1, N2>;
}[`${_IsNegative<N2>}`];
export declare type _Add<
  N1 extends Iteration, 
  N2 extends Iteration
> = {
  'false': AddPositive<N1, N2>;
  'true': AddNegative<N1, N2>;
}[`${_IsNegative<N2>}`];
export declare type _Negate<
  N extends Iteration
> = IterationMap[N[4]];
export declare type _Greater<
  N1 extends Iteration, 
  N2 extends Iteration
> = _IsPositive<_Sub<N1, N2>>;
export declare type _Lower<
  N1 extends Iteration, 
  N2 extends Iteration
> = _IsNegative<_Sub<N1, N2>>;
export declare type _GreaterEq<
  N1 extends Iteration, 
  N2 extends Iteration, 
  Result=_Sub<N1, N2>
> = _Or<
  _IsPositive<_Cast<Result, Iteration>>, 
  _IsZero<_Cast<Result, Iteration>>
>;
export declare type _LowerEq<
  N1 extends Iteration, 
  N2 extends Iteration, 
  Result=_Sub<N1, N2>
> = _Or<
  _IsNegative<_Cast<Result, Iteration>>, 
  _IsZero<_Cast<Result, Iteration>>
>;
export declare type _Enum<
  N extends Iteration,
  Way extends _Way
> = {
  '->': EnumAsc<N>;
  '<-': EnumDesc<N>;
}[Way];

export declare type EnumAsc<
  N extends Iteration
> = {
  "true": EnumAscPositive<N>,
  "false": EnumAscNegative<N>
}[`${_IsPositive<N>}`];
export declare type EnumDesc<
  N extends Iteration
> = {
  "true": EnumDescPositive<N>,
  "false": EnumDescNegative<N>
}[`${_IsPositive<N>}`];


export declare type EnumAscPositive<
  N extends Iteration,
  Start=IterationOf<0>,
  Result=[]
> = _Equal<Pos<N>, Pos<_Cast<Start, Iteration>>> extends true 
  ? [ ..._Cast<Result, number[]> ] 
: EnumAscPositive<N, Next<_Cast<Start, Iteration>>, [ ..._Cast<Result, number[]>, Pos<_Cast<Start, Iteration>> ]>;

export declare type EnumAscNegative<
  N extends Iteration,
  End=IterationOf<0>,
  Result=[]
> = _Equal<Pos<N>, Pos<_Cast<End, Iteration>>> extends true 
  ? [ ..._Cast<Result, number[]> ] 
: EnumAscNegative<Next<N>, End, [ ..._Cast<Result, number[]>, Pos<Next<N>> ]>;

export declare type EnumDescPositive<
  N extends Iteration,
  End=IterationOf<0>,
  Result=[]
> = _Equal<Pos<N>, Pos<_Cast<End, Iteration>>> extends true 
  ? [ ..._Cast<Result, number[]> ] 
: EnumDescPositive<Prev<N>, End, [ ..._Cast<Result, number[]>, Pos<Prev<N>> ]>;

export declare type EnumDescNegative<
  N extends Iteration,
  Start=IterationOf<0>,
  Result=[]
> = _Equal<Pos<N>, Pos<_Cast<Start, Iteration>>> extends true 
? [ ..._Cast<Result, number[]> ] 
: EnumDescNegative<N, Prev<_Cast<Start, Iteration>>, [ ..._Cast<Result, number[]>, Pos<_Cast<Start, Iteration>> ]>;

export declare type _Range<
  N1 extends Iteration, 
  N2 extends Iteration,
  Result=[]
> = _Equal<Pos<N1>, Pos<N2>> extends true 
  ? [ ..._Cast<Result, number[]>, Pos<N1> ]
: _Greater<N2, N1> extends true 
  ? _Range<Next<N1>, N2, [ ..._Cast<Result, number[]>, Pos<N1> ]>
: _Range<Prev<N1>, N2, [ ..._Cast<Result, number[]>, Pos<N1> ]>

export declare type _Incr<
  N extends Iteration
> = Pos<_Add<N, IterationOf<1>>>;

export declare type _Decr<
  N extends Iteration
> = Pos<_Sub<N, IterationOf<1>>>;

export declare type _Between<
  N extends Iteration,
  From extends Iteration,
  To extends Iteration
> = _And<
  _GreaterEq<N, From>,
  _LowerEq<N, To>
>;