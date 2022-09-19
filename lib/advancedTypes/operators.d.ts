export declare type Cast<A1 extends any, A2 extends any> = A1 extends A2 ? A1 : A2;

export declare type Equal<T1, T2> = T1 extends T2 ? T2 extends T1 ? true : false : false;
