import { 
} from "./_object";

declare global {
  namespace Tx {
    namespace Object {
      type Merge = never;
    }
  }
}

export {}