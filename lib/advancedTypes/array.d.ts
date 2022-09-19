import { 
  _Join,
  _Length,
  _Replace,
  _ReplaceAll,
  _Reverse
} from "./_array";

declare global {
  namespace T {
    namespace Array {
      type Pop<L extends any[]> = L extends [ ...infer Start, infer _ ] ? [ ...Start ] : never;
      type Shift<L extends any[]> = L extends [ infer _, ...infer Next ] ? [ ...Next ] : never;
      type Join<L extends any[], S=","> = S extends string ? _Join<L, S> : never;
      type Length<L extends any[]> = _Length<L>;
      type Replace<L extends any[], From extends any, To extends any> = _Replace<L, From, To>;
      type ReplaceAll<L extends any[], From extends any, To extends any> = _ReplaceAll<L, From, To>;
      type Reverse<L extends any[]> = _Reverse<L>;
    }
  }
}

export {}