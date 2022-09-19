export declare type _Join<
  L extends any[], 
  S extends string,
  Result=""
> = L extends [ infer Start, ...infer End ] 
  ? End extends any[]
    ? _Join<
      [ ...End ], 
      S, 
      `${Result extends string ? Result : never}${Start extends string ? Start : never}${End extends ""[] ? "" : S}`
    > 
  : never 
: Result;
