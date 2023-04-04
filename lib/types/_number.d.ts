/// <reference path="operators.d.ts" />
/// <reference path="iterations.d.ts" />
/// <reference path="_array.d.ts" />

declare type _Way = "->" | "<-";

declare type _SubPositive<N1 extends Iteration, N2 extends Iteration> = {
	0: _SubPositive<Prev<N1>, Prev<N2>>;
	1: N1;
	2: number;
}[Pos<N2> extends 0 ? 1 : number extends Pos<N2> ? 2 : 0];

declare type _SubNegative<N1 extends Iteration, N2 extends Iteration> = {
	0: _SubNegative<Next<N1>, Next<N2>>;
	1: N1;
	2: number;
}[Pos<N2> extends 0 ? 1 : number extends Pos<N2> ? 2 : 0];

declare type _AddPositive<N1 extends Iteration, N2 extends Iteration> = {
	0: _AddPositive<Next<N1>, Prev<N2>>;
	1: N1;
	2: IterationOf<number>;
}[Pos<N2> extends 0 ? 1 : number extends Pos<N2> ? 2 : 0];

declare type _AddNegative<N1 extends Iteration, N2 extends Iteration> = {
	0: _AddNegative<Prev<N1>, Next<N2>>;
	1: N1;
	2: number;
}[Pos<N2> extends 0 ? 1 : number extends Pos<N2> ? 2 : 0];

declare type SubPositive<
	N1 extends Iteration,
	N2 extends Iteration
> = _SubPositive<N1, N2> extends infer X ? _Satisfy<X, Iteration> : never;
declare type SubNegative<
	N1 extends Iteration,
	N2 extends Iteration
> = _SubNegative<N1, N2> extends infer X ? _Satisfy<X, Iteration> : never;
declare type AddPositive<
	N1 extends Iteration,
	N2 extends Iteration
> = _AddPositive<N1, N2> extends infer X ? _Satisfy<X, Iteration> : never;
declare type AddNegative<
	N1 extends Iteration,
	N2 extends Iteration
> = _AddNegative<N1, N2> extends infer X ? _Satisfy<X, Iteration> : never;

declare type _IsPositive<N extends Iteration> = {
	"-": false;
	"+": true;
	"0": false;
}[N[1]];

declare type _IsNegative<N extends Iteration> = {
	"-": true;
	"+": false;
	"0": false;
}[N[1]];

declare type _IsZero<N extends Iteration> = {
	"-": false;
	"+": false;
	"0": true;
}[N[1]];

declare type _Sub<N1 extends Iteration, N2 extends Iteration> = {
	false: _Or<_Equal<Pos<N1>, number>, _Equal<Pos<N2>, number>> extends true
		? IterationOf<number>
		: SubPositive<N1, N2>;
	true: _Or<_Equal<Pos<N1>, number>, _Equal<Pos<N2>, number>> extends true
		? IterationOf<number>
		: SubNegative<N1, N2>;
}[`${_IsNegative<N2>}`];

declare type _Add<N1 extends Iteration, N2 extends Iteration> = {
	false: _Or<_Equal<Pos<N1>, number>, _Equal<Pos<N2>, number>> extends true
		? IterationOf<number>
		: AddPositive<N1, N2>;
	true: _Or<_Equal<Pos<N1>, number>, _Equal<Pos<N2>, number>> extends true
		? IterationOf<number>
		: AddNegative<N1, N2>;
}[`${_IsNegative<N2>}`];

declare type _Negate<N extends Iteration> = IterationMap[N[4]];

declare type _Greater<N1 extends Iteration, N2 extends Iteration> = _IsPositive<
	_Sub<N1, N2>
>;

declare type _Lower<N1 extends Iteration, N2 extends Iteration> = _IsNegative<
	_Sub<N1, N2>
>;

declare type _GreaterEq<
	N1 extends Iteration,
	N2 extends Iteration,
	Result = _Sub<N1, N2>
> = _Or<
	_IsPositive<_Satisfy<Result, Iteration>>,
	_IsZero<_Satisfy<Result, Iteration>>
>;

declare type _LowerEq<
	N1 extends Iteration,
	N2 extends Iteration,
	Result = _Sub<N1, N2>
> = _Or<
	_IsNegative<_Satisfy<Result, Iteration>>,
	_IsZero<_Satisfy<Result, Iteration>>
>;

declare type _Enum<N extends Iteration, Way extends _Way> = {
	"->": EnumAsc<N>;
	"<-": EnumDesc<N>;
}[Way];

declare type EnumAsc<N extends Iteration> = {
	true: EnumAscPositive<N>;
	false: EnumAscNegative<N>;
}[`${_IsPositive<N>}`];
declare type EnumDesc<N extends Iteration> = {
	true: EnumDescPositive<N>;
	false: EnumDescNegative<N>;
}[`${_IsPositive<N>}`];

declare type EnumAscPositive<
	N extends Iteration,
	Start = IterationOf<0>,
	Result = []
> = _Equal<Pos<N>, Pos<_Satisfy<Start, Iteration>>> extends true
	? _Satisfy<Result, number[]>
	: EnumAscPositive<
			N,
			Next<_Satisfy<Start, Iteration>>,
			_Push<_Satisfy<Result, number[]>, Pos<_Satisfy<Start, Iteration>>>
	  >;

declare type EnumAscNegative<
	N extends Iteration,
	End = IterationOf<0>,
	Result = []
> = _Equal<Pos<N>, Pos<_Satisfy<End, Iteration>>> extends true
	? _Satisfy<Result, number[]>
	: EnumAscNegative<
			Next<N>,
			End,
			_Push<_Satisfy<Result, number[]>, Pos<Next<N>>>
	  >;

declare type EnumDescPositive<
	N extends Iteration,
	End = IterationOf<0>,
	Result = []
> = _Equal<Pos<N>, Pos<_Satisfy<End, Iteration>>> extends true
	? _Satisfy<Result, number[]>
	: EnumDescPositive<
			Prev<N>,
			End,
			_Push<_Satisfy<Result, number[]>, Pos<Prev<N>>>
	  >;

declare type EnumDescNegative<
	N extends Iteration,
	Start = IterationOf<0>,
	Result = []
> = _Equal<Pos<N>, Pos<_Satisfy<Start, Iteration>>> extends true
	? _Satisfy<Result, number[]>
	: EnumDescNegative<
			N,
			Prev<_Satisfy<Start, Iteration>>,
			_Push<_Satisfy<Result, number[]>, Pos<_Satisfy<Start, Iteration>>>
	  >;

declare type _Range<
	N1 extends Iteration,
	N2 extends Iteration,
	Result = []
> = _Equal<Pos<N1>, Pos<N2>> extends true
	? _Push<_Satisfy<Result, number[]>, Pos<N1>>
	: _Greater<N2, N1> extends true
	? _Range<Next<N1>, N2, _Push<_Satisfy<Result, number[]>, Pos<N1>>>
	: _Range<Prev<N1>, N2, _Push<_Satisfy<Result, number[]>, Pos<N1>>>;

declare type _Incr<N extends Iteration> = Pos<_Add<N, IterationOf<1>>>;

declare type _Decr<N extends Iteration> = Pos<_Sub<N, IterationOf<1>>>;

declare type _Between<
	N extends Iteration,
	From extends Iteration,
	To extends Iteration
> = _And<_GreaterEq<N, From>, _LowerEq<N, To>>;
