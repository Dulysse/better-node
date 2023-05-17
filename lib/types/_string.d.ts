/// <reference path="operators.d.ts" />
/// <reference path="_array.d.ts" />
/// <reference path="iterations.d.ts" />
/// <reference path="_number.d.ts" />

declare type _StringSplit<
	T extends string,
	S extends string,
	Result = []
> = T extends `${infer Start}${S}${infer Next}`
	? _StringSplit<Next, S, _Push<_Satisfy<Result, any[]>, Start>>
	: T extends `${infer End}`
	? _Equal<End, ""> extends true
		? _Satisfy<Result, any[]>
		: _Push<_Satisfy<Result, any[]>, End>
	: never;

declare type _StringFirst<T extends string> = T extends string
	? _NotEqual<T, string> extends true
		? _NotEqual<_StringLength<T>, 0> extends true
			? T extends `${infer F}${string}`
				? F
				: string | undefined
			: undefined
		: string | undefined
	: never;

declare type _StringLast<T extends string> = T extends string
	? _NotEqual<T, string> extends true
		? _NotEqual<_StringLength<T>, 0> extends true
			? _StringAt<T, _Decr<IterationOf<_StringLength<T>>>>
			: string | undefined
		: string | undefined
	: never;

declare type _StringAt<
	T extends string,
	I extends number,
	Result = _StringSplit<T, "">[I]
> = Result extends string ? Result : never;

declare type _StringLength<
	T extends string,
	Result = _Length<_StringSplit<T, "">>
> = Result extends number ? Result : never;

declare type _StringIndexOf<T extends string, S extends string> = _Or<
	_Equal<T, string>,
	_Equal<S, string>
> extends true
	? number
	: _StringLength<S> extends 0
	? 0
	: T extends `${infer Before}${S}${infer _}`
	? _StringLength<Before>
	: -1;

declare type _StringLastIndexOf<
	T extends string,
	S extends string,
	Result = -1
> = _Or<_Equal<T, string>, _Equal<S, string>> extends true
	? number
	: _StringLength<S> extends 0
	? _StringLength<T>
	: T extends `${infer Before}${S}${infer End}`
	? _StringLastIndexOf<
			End,
			S,
			_IsNegative<IterationOf<_Satisfy<Result, number>>> extends true
				? _StringLength<Before>
				: Pos<
						_Add<
							IterationOf<_Satisfy<Result, number>>,
							IterationOf<_Incr<IterationOf<_StringLength<Before>>>>
						>
				  >
	  >
	: Result;

declare type _StringReplace<
	T extends string,
	From extends string,
	To extends string
> = T extends `${infer Before}${From}${infer After}`
	? `${Before}${To}${After}`
	: T;

declare type _StringReplaceAll<
	T extends string,
	From extends string,
	To extends string,
	Next = _StringReplace<T, From, To>
> = T extends Next ? T : _StringReplaceAll<_Satisfy<Next, string>, From, To>;

declare type _StringReverse<
	T extends string,
	Counter = _StringLength<T>,
	Result = ""
> = Result extends string
	? Counter extends 0
		? Result
		: T extends `${infer Start}${infer End}`
		? _StringReverse<
				End,
				_Decr<IterationOf<Counter extends number ? Counter : never>>,
				`${Start}${Result}`
		  >
		: never
	: never;

declare type _StringSlice<
	T extends string,
	Start = 0,
	End = _StringLength<T>,
	Counter = _IsNegative<IterationOf<_Satisfy<Start, number>>> extends true
		? _IsNegative<
				_Add<
					IterationOf<_StringLength<T>>,
					IterationOf<_Satisfy<Start, number>>
				>
		  > extends true
			? 0
			: Pos<
					_Add<
						IterationOf<_StringLength<T>>,
						IterationOf<_Satisfy<Start, number>>
					>
			  >
		: Start,
	Result = ""
> = Counter extends End
	? Result
	: _Lower<
			IterationOf<_Satisfy<Start, number>>,
			IterationOf<_Satisfy<End, number>>
	  > extends true
	? _StringSlice<
			T,
			Start,
			_IsNegative<IterationOf<_Satisfy<End, number>>> extends true
				? Pos<
						_Add<
							IterationOf<_StringLength<T>>,
							IterationOf<_Satisfy<End, number>>
						>
				  >
				: End,
			_Incr<IterationOf<_Satisfy<Counter, number>>>,
			`${_Satisfy<Result, string>}${_Lower<
				IterationOf<_Satisfy<Counter, number>>,
				IterationOf<_StringLength<T>>
			> extends true
				? _StringAt<T, _Satisfy<Counter, number>>
				: ""}`
	  >
	: "";
