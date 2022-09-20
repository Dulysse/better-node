export declare type _Cast<A1 extends any, A2 extends any> = A1 extends A2 ? A1 : A2;

export declare type _Equal<T1, T2> = T1 extends T2 ? T2 extends T1 ? true : false : false;

export declare type _NotEqual<T1, T2> = _Equal<T1, T2> extends true ? false : true;

export declare type _Or<
  B1 extends boolean, 
  B2 extends boolean
> = {
  "false": {
      "false": false;
      "true": true;
  };
  "true": {
      "false": true;
      "true": true;
  };
}[`${B1}`][`${B2}`];

export declare type _And<
  B1 extends boolean, 
  B2 extends boolean
> = {
  "false": {
      "false": false;
      "true": false;
  };
  "true": {
      "false": false;
      "true": true;
  };
}[`${B1}`][`${B2}`];
