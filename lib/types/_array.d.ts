import { _Decr, _Incr } from "./_number";
import { IterationOf, Pos } from "./iterations";
import { _IndexOf as IndexOfString } from "./_string";
import { _And, _Equal, _NotEqual } from "./operators";

export declare type _StringLiteralType = string | number | bigint | boolean;

export declare type _StringLiteralTypeParser<
  T extends any
> = T extends _StringLiteralType 
  ? T
: {
  0: "[object Object]";
  1: _Join<[ ...(T extends any[] ? T : []) ], ",">
}[T extends any[] ? 1 : 0];

export declare type _Join<
  L extends any[], 
  S extends string,
  Result=""
> = L extends [ infer Start, ...infer End ] 
  ? End extends unknown[]
    ? _Join<
      [ ...End ], 
      S, 
      `${_StringLiteralTypeParser<Result>}${_StringLiteralTypeParser<Start>}${_Length<End> extends 0 ? "" : S}`
    > 
  : never 
: Result;

export declare type _Length<
  L extends any[]
> = L extends any[] ? L['length'] : never;

export declare type _Replace<
  L extends any[], 
  From extends any, 
  To extends any,
  Result=[],
  AsChange=false,
  Counter=_Length<L>
> = Counter extends 0
  ? Result
: L extends [ infer Start, ...infer End ] 
? End extends unknown[]
    ? Start extends From
      ? _Replace<
        [ ...End ],
        From,
        To,
        [ 
          ...(Result extends any[] ? Result : []),
          AsChange extends false ? To : From
        ], 
        AsChange extends false ? true : AsChange,
        _Decr<
          IterationOf<
            Counter extends number ? Counter : never
          >,
        >
      >
    : _Replace<
      [ ...End ],
      From,
      To,
      [ 
        ...(Result extends any[] ? Result : []),
        Start
      ], 
      AsChange,
      _Decr<
        IterationOf<
          Counter extends number ? Counter : never
        >
      >
    >
  : never
: L;

export declare type _ReplaceAll<
  L extends any[], 
  From extends any,
  To extends any,
  Next=_Replace<L, From, To>
> = L extends Next
  ? L
: Next extends any[] 
  ? _ReplaceAll<Next, From, To>
: never;

export declare type _Reverse<
  L extends any[],
  Counter=_Length<L>,
  Result=[]
> = Result extends any[] 
  ? Counter extends 0
    ? Result
  : L extends [ infer Start, ...infer End ]
    ? End extends unknown[]
      ? _Reverse<
        End,
        _Decr<
          IterationOf<
            Counter extends number ? Counter : never
          >
        >,
        [ Start, ...Result ]
      >
    : never
  : never
: never;

export declare type _First<
  L extends any[]
> = L extends [ infer First, ...infer _ ] 
  ? First
: never;

export declare type _Last<
  L extends any[]
> = L extends [ ...infer _, infer Last ] 
  ? Last
: never;

export declare type _IndexOf<
  L extends any[],
  T extends any,
  I=0
> = _Equal<I, _Length<L>> extends true
  ? -1
: _Equal<L[I], T> extends true
  ? I
: _IndexOf<
  L, 
  T, 
  _Incr<IterationOf<I>>
>;

export declare type _Includes<
  L extends any[],
  T extends any
> = _NotEqual<
  _IndexOf<L, T>,
  -1
>;

export declare type _Filter<
  L extends any[],
  F extends () => any,
  Result=[]
> = F extends () => infer R
  ? L extends [ infer K, ...infer Next ]
    ? _Filter<
      Next, 
      F, 
      [ 
        ...Result,
        ...(_Equal<R, K> extends true 
          ? [ K ] 
        : []) 
      ]
    >
  : Result
: never;

export declare type _Find<
  L extends any[],
  F extends () => any,
  Result=null
> = F extends () => infer R
  ? L extends [ infer K, ...infer Next ]
    ? _Find<
      Next, 
      F, 
      _Equal<R, K> extends true 
        ? K 
      : Result
    >
  : Result
: never;

export declare type _ToString<
  L extends any[]
> = _Join<L, ",">;

export declare type _Slice<
  L extends any[]
> = never;

export declare type _Splice<
  L extends any[]
> = never;

export declare type _Concat<
  L1 extends any[],
  L2 extends any[]
> = never;

export declare type _Push<
  L extends any[]
> = never;

export declare type _Insert<
  L extends any[]
> = never;

export declare type _Drop<
  L extends any[]
> = never;

export declare type _Sum<
  L extends any[]
> = never;

export declare type _Asc<
  L extends any[]
> = never;

export declare type _Desc<
  L extends any[]
> = never;

export declare type _Of<
  L extends any[]
> = never;