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
> = _SubPositive<N1, N2> extends infer X ? _Cast<X, Iteration> : never;
declare type SubNegative<
	N1 extends Iteration,
	N2 extends Iteration
> = _SubNegative<N1, N2> extends infer X ? _Cast<X, Iteration> : never;
declare type AddPositive<
	N1 extends Iteration,
	N2 extends Iteration
> = _AddPositive<N1, N2> extends infer X ? _Cast<X, Iteration> : never;
declare type AddNegative<
	N1 extends Iteration,
	N2 extends Iteration
> = _AddNegative<N1, N2> extends infer X ? _Cast<X, Iteration> : never;

declare type MultiplyPositive<
	N1 extends Iteration,
	N2 extends Iteration,
	Result = IterationOf<0>
> = _Or<_IsZero<N2>, _Equal<Result, IterationOf<number>>> extends true
	? Result
	: MultiplyPositive<
			N1,
			IterationOf<_Decr<N2>>,
			_Cast<IterationOf<number>, _Add<N1, _Cast<Result, Iteration>>>
	  >;

declare type MultiplyNegative<
	N1 extends Iteration,
	N2 extends Iteration,
	Result = MultiplyPositive<N1, _Negate<N2>>
> = _Negate<_Cast<Result, Iteration>>;

declare type DividePositive<
	N1 extends Iteration,
	N2 extends Iteration,
	Total = IterationOf<0>,
	IsPositive = _IsPositive<N1>
> = _IsZero<N2> extends true
	? never
	: _IsZero<N1> extends true
	? Total
	: _Or<
			_And<_IsNegative<N1>, _Equal<IsPositive, true>>,
			_And<_IsPositive<N1>, _NotEqual<IsPositive, true>>
	  > extends true
	? IterationOf<
			IsPositive extends true
				? _Decr<_Cast<Total, Iteration>>
				: _Incr<_Cast<Total, Iteration>>
	  >
	: DividePositive<
			IsPositive extends true ? _Sub<N1, N2> : _Add<N1, N2>,
			N2,
			IterationOf<
				IsPositive extends true
					? _Incr<_Cast<Total, Iteration>>
					: _Decr<_Cast<Total, Iteration>>
			>,
			IsPositive
	  >;

declare type DivideNegative<
	N1 extends Iteration,
	N2 extends Iteration
> = _Negate<DividePositive<N1, _Negate<N2>>>;

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

declare type _Multiply<N1 extends Iteration, N2 extends Iteration> = {
	false: _Or<_Equal<Pos<N1>, number>, _Equal<Pos<N2>, number>> extends true
		? IterationOf<number>
		: MultiplyPositive<N1, N2>;
	true: _Or<_Equal<Pos<N1>, number>, _Equal<Pos<N2>, number>> extends true
		? IterationOf<number>
		: MultiplyNegative<N1, N2>;
}[`${_IsNegative<N2>}`];

declare type _Divide<N1 extends Iteration, N2 extends Iteration> = {
	false: _Or<_Equal<Pos<N1>, number>, _Equal<Pos<N2>, number>> extends true
		? IterationOf<number>
		: DividePositive<N1, N2>;
	true: _Or<_Equal<Pos<N1>, number>, _Equal<Pos<N2>, number>> extends true
		? IterationOf<number>
		: DivideNegative<N1, N2>;
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
	_IsPositive<_Cast<Result, Iteration>>,
	_IsZero<_Cast<Result, Iteration>>
>;

declare type _LowerEq<
	N1 extends Iteration,
	N2 extends Iteration,
	Result = _Sub<N1, N2>
> = _Or<
	_IsNegative<_Cast<Result, Iteration>>,
	_IsZero<_Cast<Result, Iteration>>
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
> = _Equal<Pos<N>, Pos<_Cast<Start, Iteration>>> extends true
	? _Cast<Result, number[]>
	: EnumAscPositive<
			N,
			Next<_Cast<Start, Iteration>>,
			_Push<_Cast<Result, number[]>, Pos<_Cast<Start, Iteration>>>
	  >;

declare type EnumAscNegative<
	N extends Iteration,
	End = IterationOf<0>,
	Result = []
> = _Equal<Pos<N>, Pos<_Cast<End, Iteration>>> extends true
	? _Cast<Result, number[]>
	: EnumAscNegative<Next<N>, End, _Push<_Cast<Result, number[]>, Pos<Next<N>>>>;

declare type EnumDescPositive<
	N extends Iteration,
	End = IterationOf<0>,
	Result = []
> = _Equal<Pos<N>, Pos<_Cast<End, Iteration>>> extends true
	? _Cast<Result, number[]>
	: EnumDescPositive<
			Prev<N>,
			End,
			_Push<_Cast<Result, number[]>, Pos<Prev<N>>>
	  >;

declare type EnumDescNegative<
	N extends Iteration,
	Start = IterationOf<0>,
	Result = []
> = _Equal<Pos<N>, Pos<_Cast<Start, Iteration>>> extends true
	? _Cast<Result, number[]>
	: EnumDescNegative<
			N,
			Prev<_Cast<Start, Iteration>>,
			_Push<_Cast<Result, number[]>, Pos<_Cast<Start, Iteration>>>
	  >;

declare type _Range<
	N1 extends Iteration,
	N2 extends Iteration,
	Result = []
> = _Equal<Pos<N1>, Pos<N2>> extends true
	? _Push<_Cast<Result, number[]>, Pos<N1>>
	: _Greater<N2, N1> extends true
	? _Range<Next<N1>, N2, _Push<_Cast<Result, number[]>, Pos<N1>>>
	: _Range<Prev<N1>, N2, _Push<_Cast<Result, number[]>, Pos<N1>>>;

declare type _Incr<N extends Iteration> = Pos<_Add<N, IterationOf<1>>>;

declare type _Decr<N extends Iteration> = Pos<_Sub<N, IterationOf<1>>>;

declare type _Between<
	N extends Iteration,
	From extends Iteration,
	To extends Iteration
> = _And<_GreaterEq<N, From>, _LowerEq<N, To>>;

declare type _IsEven<N extends Iteration> = _Equal<
	_Multiply<_Divide<N, IterationOf<2>>, IterationOf<2>>,
	N
>;

declare type _IsOdd<N extends Iteration> = _NotEqual<
	_Multiply<_Divide<N, IterationOf<2>>, IterationOf<2>>,
	N
>;
