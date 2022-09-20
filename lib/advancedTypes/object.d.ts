import { 
} from "./_object";

declare global {
  namespace T {
    namespace Object {
      type Merge = never;
    }
  }
}

export {}