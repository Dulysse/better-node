import { _Sub, _Add } from "./_number";
import { IterationOf } from "./iterations";

declare global {
  namespace T {
    namespace Number {
      type Sub<N1 extends number, N2 extends number> = N1 extends unknown ? N2 extends unknown ? _Sub<IterationOf<N1>, IterationOf<N2>>[0] : never : never;
      type Add<N1 extends number, N2 extends number> = N1 extends unknown ? N2 extends unknown ? _Add<IterationOf<N1>, IterationOf<N2>>[0] : never : never;
    }
  }
}

export {}