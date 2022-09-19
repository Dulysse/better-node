import { _Sub } from "./_number";
import { IterationOf } from "./iterations";

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
        _Sub<
          IterationOf<
            Counter extends number ? Counter : never
          >, 
          IterationOf<1>
        >[0]
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
      _Sub<
        IterationOf<
          Counter extends number ? Counter : never
        >, 
        IterationOf<1>
      >[0]
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
        _Sub<
          IterationOf<
            Counter extends number ? Counter : never
          >, 
          IterationOf<1>
        >[0],
        [ Start, ...Result ]
      >
    : never
  : never
: never;