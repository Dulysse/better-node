/// <reference path="iterations.d.ts" />
/// <reference path="operators.d.ts" />
/// <reference path="_number.d.ts" />

declare type _StringLiteralType = string | number | bigint | boolean;

declare type _StringLiteralTypeParser<T extends unknown> =
	T extends _StringLiteralType
		? T
		: {
				0: "[object Object]";
				1: _Join<_Satisfy<T, unknown[]>, ",">;
		  }[T extends unknown[] ? 1 : 0];

declare type _Join<
	TArray extends unknown[],
	S extends string,
	Result = ""
> = TArray extends [infer Start, ...infer End]
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

declare type _Length<TArray extends unknown[]> = TArray extends unknown[]
	? TArray["length"]
	: never;

declare type _Pop<TArray extends unknown[]> = TArray extends [
	...infer Start,
	infer _
]
	? [...Start]
	: never;

declare type _Shift<TArray extends unknown[]> = TArray extends [
	infer _,
	...infer Next
]
	? [...Next]
	: never;

declare type _Replace<
	TArray extends unknown[],
	From extends unknown,
	To extends unknown,
	Result = [],
	AsChange = false,
	Counter = _Length<TArray>
> = Counter extends 0
	? Result
	: TArray extends [infer Start, ...infer End]
	? End extends unknown[]
		? Start extends From
			? _Replace<
					End,
					From,
					To,
					_Push<
						_Satisfy<Result, unknown[]>,
						AsChange extends false ? To : From
					>,
					AsChange extends false ? true : AsChange,
					_Decr<IterationOf<Counter extends number ? Counter : never>>
			  >
			: _Replace<
					End,
					From,
					To,
					_Push<_Satisfy<Result, unknown[]>, Start>,
					AsChange,
					_Decr<IterationOf<Counter extends number ? Counter : never>>
			  >
		: never
	: TArray;

declare type _ReplaceAll<
	TArray extends unknown[],
	From extends unknown,
	To extends unknown,
	Next = _Replace<TArray, From, To>
> = TArray extends Next
	? TArray
	: Next extends unknown[]
	? _ReplaceAll<Next, From, To>
	: never;

declare type _Reverse<
	TArray extends unknown[],
	Counter = _Length<TArray>,
	Result = []
> = Result extends unknown[]
	? Counter extends 0
		? Result
		: TArray extends [infer Start, ...infer End]
		? End extends unknown[]
			? _Reverse<
					End,
					_Decr<IterationOf<Counter extends number ? Counter : never>>,
					_Insert<Result, 0, Start>
			  >
			: never
		: never
	: never;

declare type _First<TArray extends unknown[]> = TArray extends [
	infer First,
	...infer _
]
	? First
	: never;

declare type _Last<TArray extends unknown[]> = TArray extends [
	...infer _,
	infer Last
]
	? Last
	: never;

declare type _IndexOf<
	TArray extends unknown[],
	T extends unknown,
	I = 0
> = I extends number
	? _Equal<I, _Length<TArray>> extends true
		? -1
		: _Equal<TArray[I], T> extends true
		? I
		: _IndexOf<TArray, T, _Incr<IterationOf<I>>>
	: never;

declare type _LastIndexOf<
	TArray extends unknown[],
	T extends unknown,
	I = _Length<TArray>
> = I extends number
	? _Equal<TArray[I], T> extends true
		? I
		: _Equal<I, 0> extends true
		? -1
		: _LastIndexOf<TArray, T, _Decr<IterationOf<I>>>
	: never;

declare type _Includes<TArray extends unknown[], T extends unknown> = _NotEqual<
	_IndexOf<TArray, T>,
	-1
>;

declare type _Filter<
	TArray extends unknown[],
	F extends () => unknown,
	Result = []
> = F extends () => infer R
	? TArray extends [infer K, ...infer Next]
		? _Filter<
				Next,
				F,
				_Concat<
					_Satisfy<Result, unknown[]>,
					_Equal<R, K> extends true ? [K] : []
				>
		  >
		: Result
	: never;

declare type _Find<
	TArray extends unknown[],
	F extends () => unknown,
	Result = null
> = F extends () => infer R
	? TArray extends [infer K, ...infer Next]
		? _Find<Next, F, _Equal<R, K> extends true ? K : Result>
		: Result
	: never;

declare type _ToString<TArray extends unknown[]> = _Join<TArray, ",">;

declare type _Slice<
	TArray extends unknown[],
	Start = 0,
	End = _Length<TArray>,
	Counter = _IsNegative<IterationOf<_Satisfy<Start, number>>> extends true
		? _IsNegative<
				_Add<IterationOf<_Length<TArray>>, IterationOf<_Satisfy<Start, number>>>
		  > extends true
			? 0
			: Pos<
					_Add<
						IterationOf<_Length<TArray>>,
						IterationOf<_Satisfy<Start, number>>
					>
			  >
		: Start,
	Result = []
> = Counter extends End
	? Result
	: _Lower<
			IterationOf<_Satisfy<Start, number>>,
			IterationOf<_Satisfy<End, number>>
	  > extends true
	? _Slice<
			TArray,
			Start,
			_IsNegative<IterationOf<_Satisfy<End, number>>> extends true
				? Pos<
						_Add<
							IterationOf<_Length<TArray>>,
							IterationOf<_Satisfy<End, number>>
						>
				  >
				: End,
			_Incr<IterationOf<_Satisfy<Counter, number>>>,
			_Concat<
				_Satisfy<Result, unknown[]>,
				_Lower<
					IterationOf<_Satisfy<Counter, number>>,
					IterationOf<_Length<TArray>>
				> extends true
					? [TArray[_Satisfy<Counter, number>]]
					: []
			>
	  >
	: [];

declare type _Splice<
	TArray extends unknown[],
	Start = 0,
	DeleteCount = _Length<TArray>,
	Index = _IsNegative<IterationOf<_Satisfy<Start, number>>> extends true
		? _IsNegative<
				_Add<IterationOf<_Length<TArray>>, IterationOf<_Satisfy<Start, number>>>
		  > extends true
			? 0
			: Pos<
					_Add<
						IterationOf<_Length<TArray>>,
						IterationOf<_Satisfy<Start, number>>
					>
			  >
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
		IterationOf<_Length<TArray>>
	> extends true
		? _Length<TArray>
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
			TArray,
			Start,
			DeleteCount,
			_Incr<IterationOf<_Satisfy<Index, number>>>,
			Target,
			_Push<_Satisfy<Result, unknown[]>, TArray[_Satisfy<Index, number>]>
	  >;

declare type _Concat<L1 extends unknown[], L2 extends unknown[]> = [
	...L1,
	...L2
];

declare type _Push<TArray extends unknown[], T extends unknown> = [
	...TArray,
	T
];

declare type _Insert<
	TArray extends unknown[],
	I extends number,
	T extends unknown
> = _IsNegative<IterationOf<I>> extends true
	? never
	: _Concat<_Push<_Slice<TArray, 0, I>, T>, _Slice<TArray, I, _Length<TArray>>>;

declare type _Drop<
	TArray extends unknown[],
	T extends unknown,
	Result = []
> = _Equal<_Length<TArray>, 0> extends true
	? Result
	: TArray extends [infer Start, ...infer Next]
	? _Drop<
			Next,
			T,
			_Concat<
				_Satisfy<Result, unknown[]>,
				_Equal<Start, T> extends true ? [] : [Start]
			>
	  >
	: never;

declare type _Sum<TArray extends number[], Total = 0> = _Equal<
	_Length<TArray>,
	0
> extends true
	? _Satisfy<Total, number>
	: TArray extends [infer Start, ...infer Next]
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

declare type _IsSorted<
	TArray extends number[],
	Type extends "ASC" | "DESC",
	Result = true
> = _Equal<_Length<TArray>, 0> extends true
	? _Satisfy<Result, boolean>
	: TArray extends [infer Start, infer Second, ...infer Next]
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
	: _Equal<TArray, number[]> extends true
	? number[]
	: Result;

declare type _Asc<TArray extends number[], Result = []> = _Equal<
	_Length<TArray>,
	0
> extends true
	? _IsSorted<_Satisfy<Result, number[]>, "ASC"> extends true
		? _Satisfy<Result, number[]>
		: _Asc<_Satisfy<Result, number[]>>
	: TArray extends [infer First, ...infer Next]
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
	: _Equal<TArray, number[]> extends true
	? number[]
	: never;

declare type _Desc<TArray extends number[], Result = []> = _Equal<
	_Length<TArray>,
	0
> extends true
	? _IsSorted<_Satisfy<Result, number[]>, "DESC"> extends true
		? _Satisfy<Result, number[]>
		: _Desc<_Satisfy<Result, number[]>>
	: TArray extends [infer First, ...infer Next]
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
	: _Equal<TArray, number[]> extends true
	? number[]
	: never;

declare type _Min<TArray extends number[]> = _First<_Asc<TArray>>;

declare type _Max<TArray extends number[]> = _First<_Desc<TArray>>;

declare type _Of<
	TArray extends unknown[],
	T extends unknown
> = TArray extends (infer R)[] ? (R extends T ? true : false) : never;

declare type _At<
	TArray extends unknown[],
	I extends number,
	Index = _IsNegative<IterationOf<_Satisfy<I, number>>> extends true
		? _IsNegative<
				_Add<IterationOf<_Length<TArray>>, IterationOf<_Satisfy<I, number>>>
		  > extends true
			? 0
			: Pos<
					_Add<IterationOf<_Length<TArray>>, IterationOf<_Satisfy<I, number>>>
			  >
		: I
> = _Greater<
	IterationOf<_Length<TArray>>,
	IterationOf<_Satisfy<Index, number>>
> extends true
	? TArray[_Satisfy<Index, number>]
	: undefined;

declare type _Flat<TArray extends unknown[], Depth = 1> = _Or<
	_Or<_Equal<Depth, 0>, _IsNegative<IterationOf<_Satisfy<Depth, number>>>>,
	_And<_NotEqual<Depth, 0>, _Equal<_OneFlat<TArray>, TArray>>
> extends true
	? TArray
	: _Flat<_OneFlat<TArray>, _Decr<IterationOf<_Satisfy<Depth, number>>>>;

declare type _OneFlat<TArray extends unknown[], Result = []> = _Equal<
	_Length<TArray>,
	0
> extends true
	? _Satisfy<Result, unknown[]>
	: TArray extends [infer Start, ...infer Next]
	? _OneFlat<
			_Satisfy<Next, unknown[]>,
			Start extends unknown[]
				? _Concat<_Satisfy<Result, unknown[]>, _Satisfy<Start, unknown>>
				: _Push<_Satisfy<Result, unknown[]>, _Satisfy<Start, unknown>>
	  >
	: never;

declare type _ToUnion<TArray extends unknown[]> = TArray[number];

declare type _IsTuple<T> = T extends [unknown, ...unknown[]]
	? Exclude<T[0], undefined> extends unknown
		? true
		: false
	: false;

declare type _Fill<N extends number, T extends unknown, R = []> = _Equal<
	N,
	number
> extends true
	? T[]
	: _IsNegative<IterationOf<N>> extends true
	? never
	: _Equal<N, 0> extends true
	? R
	: _Fill<_Decr<IterationOf<N>>, T, [..._Satisfy<R, unknown[]>, T]>;

declare type _Readable<TArray extends readonly unknown[]> =
	TArray extends readonly [...infer R] ? R : never;
