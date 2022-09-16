import { _Join } from "./_array";

declare global {
  namespace T {
    namespace Array {
      type Pop<L extends any[]> = L extends [ ...infer Start, infer _ ] ? [ ...Start ] : never;
      type Shift<L extends any[]> = L extends [ infer _, ...infer Next ] ? [ ...Next ] : never;
      type Join<L extends any[], S=","> = S extends string ? _Join<L, S> : never;
      type Length<L extends any[]> = L['length'];
    }
  }
}

export {}