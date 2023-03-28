/// <reference path="iterations.d.ts" />
/// <reference path="operators.d.ts" />
/// <reference path="_number.d.ts" />

declare type _StringLiteralType = string | number | bigint | boolean;

declare type _StringLiteralTypeParser<T extends any> =
	T extends _StringLiteralType
		? T
		: {
				0: "[object Object]";
				1: _Join<_Satisfy<T, any[]>, ",">;
		  }[T extends any[] ? 1 : 0];

declare type _Join<L extends any[], S extends string, Result = ""> = L extends [
	infer Start,
	...infer End
]
	? End extends unknown[]
		? _Join<
				End,
				S,
				`${_StringLiteralTypeParser<Result>}${_StringLiteralTypeParser<Start>}${_Length<End> extends 0
					? ""
					: S}`
		  >
		: never
	: Result;

declare type _Length<L extends any[]> = L extends any[] ? L["length"] : never;

declare type _Pop<L extends any[]> = L extends [...infer Start, infer _]
	? [...Start]
	: never;

declare type _Shift<L extends any[]> = L extends [infer _, ...infer Next]
	? [...Next]
	: never;

declare type _Replace<
	L extends any[],
	From extends any,
	To extends any,
	Result = [],
	AsChange = false,
	Counter = _Length<L>
> = Counter extends 0
	? Result
	: L extends [infer Start, ...infer End]
	? End extends unknown[]
		? Start extends From
			? _Replace<
					End,
					From,
					To,
					_Push<_Satisfy<Result, any[]>, AsChange extends false ? To : From>,
					AsChange extends false ? true : AsChange,
					_Decr<IterationOf<Counter extends number ? Counter : never>>
			  >
			: _Replace<
					End,
					From,
					To,
					_Push<_Satisfy<Result, any[]>, Start>,
					AsChange,
					_Decr<IterationOf<Counter extends number ? Counter : never>>
			  >
		: never
	: L;

declare type _ReplaceAll<
	L extends any[],
	From extends any,
	To extends any,
	Next = _Replace<L, From, To>
> = L extends Next
	? L
	: Next extends any[]
	? _ReplaceAll<Next, From, To>
	: never;

declare type _Reverse<
	L extends any[],
	Counter = _Length<L>,
	Result = []
> = Result extends any[]
	? Counter extends 0
		? Result
		: L extends [infer Start, ...infer End]
		? End extends unknown[]
			? _Reverse<
					End,
					_Decr<IterationOf<Counter extends number ? Counter : never>>,
					_Insert<Result, 0, Start>
			  >
			: never
		: never
	: never;

declare type _First<L extends any[]> = L extends [infer First, ...infer _]
	? First
	: never;

declare type _Last<L extends any[]> = L extends [...infer _, infer Last]
	? Last
	: never;

declare type _IndexOf<L extends any[], T extends any, I = 0> = I extends number
	? _Equal<I, _Length<L>> extends true
		? -1
		: _Equal<L[I], T> extends true
		? I
		: _IndexOf<L, T, _Incr<IterationOf<I>>>
	: never;

declare type _LastIndexOf<
	L extends any[],
	T extends any,
	I = _Length<L>
> = I extends number
	? _Equal<L[I], T> extends true
		? I
		: _Equal<I, 0> extends true
		? -1
		: _LastIndexOf<L, T, _Decr<IterationOf<I>>>
	: never;

declare type _Includes<L extends any[], T extends any> = _NotEqual<
	_IndexOf<L, T>,
	-1
>;

declare type _Filter<
	L extends any[],
	F extends () => any,
	Result = []
> = F extends () => infer R
	? L extends [infer K, ...infer Next]
		? _Filter<
				Next,
				F,
				_Concat<_Satisfy<Result, any[]>, _Equal<R, K> extends true ? [K] : []>
		  >
		: Result
	: never;

declare type _Find<
	L extends any[],
	F extends () => any,
	Result = null
> = F extends () => infer R
	? L extends [infer K, ...infer Next]
		? _Find<Next, F, _Equal<R, K> extends true ? K : Result>
		: Result
	: never;

declare type _ToString<L extends any[]> = _Join<L, ",">;

declare type _Slice<
	L extends any[],
	Start = 0,
	End = _Length<L>,
	Counter = _IsNegative<IterationOf<_Satisfy<Start, number>>> extends true
		? _IsNegative<
				_Add<IterationOf<_Length<L>>, IterationOf<_Satisfy<Start, number>>>
		  > extends true
			? 0
			: Pos<_Add<IterationOf<_Length<L>>, IterationOf<_Satisfy<Start, number>>>>
		: Start,
	Result = []
> = Counter extends End
	? Result
	: _Lower<
			IterationOf<_Satisfy<Start, number>>,
			IterationOf<_Satisfy<End, number>>
	  > extends true
	? _Slice<
			L,
			Start,
			_IsNegative<IterationOf<_Satisfy<End, number>>> extends true
				? Pos<_Add<IterationOf<_Length<L>>, IterationOf<_Satisfy<End, number>>>>
				: End,
			_Incr<IterationOf<_Satisfy<Counter, number>>>,
			_Concat<
				_Satisfy<Result, any[]>,
				_Lower<
					IterationOf<_Satisfy<Counter, number>>,
					IterationOf<_Length<L>>
				> extends true
					? [L[_Satisfy<Counter, number>]]
					: []
			>
	  >
	: [];

declare type _Splice<
	L extends any[],
	Start = 0,
	DeleteCount = _Length<L>,
	Index = _IsNegative<IterationOf<_Satisfy<Start, number>>> extends true
		? _IsNegative<
				_Add<IterationOf<_Length<L>>, IterationOf<_Satisfy<Start, number>>>
		  > extends true
			? 0
			: Pos<_Add<IterationOf<_Length<L>>, IterationOf<_Satisfy<Start, number>>>>
		: Start,
	Target = _Greater<
		IterationOf<
			Pos<
				_Add<
					IterationOf<_Satisfy<Index, number>>,
					IterationOf<_Satisfy<DeleteCount, number>>
				>
			>
		>,
		IterationOf<_Length<L>>
	> extends true
		? _Length<L>
		: Pos<
				_Add<
					IterationOf<_Satisfy<Index, number>>,
					IterationOf<_Satisfy<DeleteCount, number>>
				>
		  >,
	Result = []
> = _Or<
	_IsNegative<IterationOf<_Satisfy<Target, number>>>,
	_GreaterEq<
		IterationOf<_Satisfy<Index, number>>,
		IterationOf<_Satisfy<Target, number>>
	>
> extends true
	? Result
	: _Splice<
			L,
			Start,
			DeleteCount,
			_Incr<IterationOf<_Satisfy<Index, number>>>,
			Target,
			_Push<_Satisfy<Result, any[]>, L[_Satisfy<Index, number>]>
	  >;

declare type _Concat<L1 extends any[], L2 extends any[]> = [...L1, ...L2];

declare type _Push<L extends any[], T extends any> = [...L, T];

declare type _Insert<
	L extends any[],
	I extends number,
	T extends any
> = _IsNegative<IterationOf<I>> extends true
	? never
	: _Concat<_Push<_Slice<L, 0, I>, T>, _Slice<L, I, _Length<L>>>;

declare type _Drop<L extends any[], T extends any, Result = []> = _Equal<
	_Length<L>,
	0
> extends true
	? Result
	: L extends [infer Start, ...infer Next]
	? _Drop<
			Next,
			T,
			_Concat<
				_Satisfy<Result, any[]>,
				_Equal<Start, T> extends true ? [] : [Start]
			>
	  >
	: never;

declare type _Sum<L extends number[], Total = 0> = _Equal<
	_Length<L>,
	0
> extends true
	? _Satisfy<Total, number>
	: L extends [infer Start, ...infer Next]
	? _Sum<
			_Satisfy<Next, number[]>,
			Pos<
				_Add<
					IterationOf<_Satisfy<Total, number>>,
					IterationOf<_Satisfy<Start, number>>
				>
			>
	  >
	: never;

declare type _Average<
	L extends number[],
	Result = _Divide<
		IterationOf<_Satisfy<_Sum<L>, number>>,
		IterationOf<_Satisfy<_Length<L>, number>>
	>
> = _Equal<L, number[]> extends true
	? number
	: Pos<_Satisfy<Result, Iteration>>;

declare type _IsSorted<
	L extends number[],
	Type extends "ASC" | "DESC",
	Result = true
> = _Equal<_Length<L>, 0> extends true
	? _Satisfy<Result, boolean>
	: L extends [infer Start, infer Second, ...infer Next]
	? _IsSorted<
			[_Satisfy<Second, number>, ..._Satisfy<Next, number[]>],
			Type,
			_Or<
				_And<
					_Equal<Type, "ASC">,
					_Greater<
						IterationOf<_Satisfy<Start, number>>,
						IterationOf<_Satisfy<Second, number>>
					>
				>,
				_And<
					_Equal<Type, "DESC">,
					_Lower<
						IterationOf<_Satisfy<Start, number>>,
						IterationOf<_Satisfy<Second, number>>
					>
				>
			> extends true
				? false
				: Result
	  >
	: _Equal<L, number[]> extends true
	? number[]
	: Result;

declare type _Asc<L extends number[], Result = []> = _Equal<
	_Length<L>,
	0
> extends true
	? _IsSorted<_Satisfy<Result, number[]>, "ASC"> extends true
		? _Satisfy<Result, number[]>
		: _Asc<_Satisfy<Result, number[]>>
	: L extends [infer First, ...infer Next]
	? Result extends [...infer _, infer Last]
		? _LowerEq<
				IterationOf<_Satisfy<Last, number>>,
				IterationOf<_Satisfy<First, number>>
		  > extends true
			? _Asc<_Satisfy<Next, number[]>, _Push<Result, _Satisfy<First, number>>>
			: _Asc<
					_Satisfy<Next, number[]>,
					_Insert<Result, 0, _Satisfy<First, number>>
			  >
		: _Asc<_Satisfy<Next, number[]>, [First]>
	: _Equal<L, number[]> extends true
	? number[]
	: never;

declare type _Desc<L extends number[], Result = []> = _Equal<
	_Length<L>,
	0
> extends true
	? _IsSorted<_Satisfy<Result, number[]>, "DESC"> extends true
		? _Satisfy<Result, number[]>
		: _Desc<_Satisfy<Result, number[]>>
	: L extends [infer First, ...infer Next]
	? Result extends [...infer _, infer Last]
		? _GreaterEq<
				IterationOf<_Satisfy<Last, number>>,
				IterationOf<_Satisfy<First, number>>
		  > extends true
			? _Desc<_Satisfy<Next, number[]>, _Push<Result, _Satisfy<First, number>>>
			: _Desc<
					_Satisfy<Next, number[]>,
					_Insert<Result, 0, _Satisfy<First, number>>
			  >
		: _Desc<_Satisfy<Next, number[]>, [First]>
	: _Equal<L, number[]> extends true
	? number[]
	: never;

declare type _Min<L extends number[]> = _First<_Asc<L>>;

declare type _Max<L extends number[]> = _First<_Desc<L>>;

declare type _Median<L extends number[], AL = _Asc<L>> = _IsEven<
	IterationOf<_Length<_Satisfy<AL, number[]>>>
> extends true
	? _Average<
			_Splice<
				_Satisfy<AL, number[]>,
				_Decr<
					IterationOf<
						Pos<
							_Divide<
								IterationOf<_Length<_Satisfy<AL, number[]>>>,
								IterationOf<2>
							>
						>
					>
				>,
				2
			>
	  >
	: _At<
			_Satisfy<AL, number[]>,
			_Satisfy<
				Pos<
					_Divide<IterationOf<_Length<_Satisfy<AL, number[]>>>, IterationOf<2>>
				>,
				number
			>
	  >;

declare type _Of<L extends any[], T extends any> = L extends (infer R)[]
	? R extends T
		? true
		: false
	: never;

declare type _At<
	L extends any[],
	I extends number,
	Index = _IsNegative<IterationOf<_Satisfy<I, number>>> extends true
		? _IsNegative<
				_Add<IterationOf<_Length<L>>, IterationOf<_Satisfy<I, number>>>
		  > extends true
			? 0
			: Pos<_Add<IterationOf<_Length<L>>, IterationOf<_Satisfy<I, number>>>>
		: I
> = _Greater<
	IterationOf<_Length<L>>,
	IterationOf<_Satisfy<Index, number>>
> extends true
	? L[_Satisfy<Index, number>]
	: undefined;

declare type _Flat<L extends any[], Depth = 1> = _Or<
	_Or<_Equal<Depth, 0>, _IsNegative<IterationOf<_Satisfy<Depth, number>>>>,
	_And<_NotEqual<Depth, 0>, _Equal<_OneFlat<L>, L>>
> extends true
	? L
	: _Flat<_OneFlat<L>, _Decr<IterationOf<_Satisfy<Depth, number>>>>;

declare type _OneFlat<L extends any[], Result = []> = _Equal<
	_Length<L>,
	0
> extends true
	? _Satisfy<Result, any[]>
	: L extends [infer Start, ...infer Next]
	? _OneFlat<
			_Satisfy<Next, any[]>,
			Start extends any[]
				? _Concat<_Satisfy<Result, any[]>, _Satisfy<Start, any>>
				: _Push<_Satisfy<Result, any[]>, _Satisfy<Start, any>>
	  >
	: never;

declare type _ToUnion<L extends any[]> = L[number];

declare type _IsTuple<T> = T extends [unknown, ...unknown[]]
	? Exclude<T[0], undefined> extends unknown
		? true
		: false
	: false;

declare type _Fill<N extends number, T extends any, R = []> = _Equal<
	N,
	number
> extends true
	? T[]
	: _IsNegative<IterationOf<N>> extends true
	? never
	: _Equal<N, 0> extends true
	? R
	: _Fill<_Decr<IterationOf<N>>, T, [..._Satisfy<R, any[]>, T]>;

declare type _Readable<L extends readonly any[]> = L extends readonly [
	...infer R
]
	? R
	: never;
