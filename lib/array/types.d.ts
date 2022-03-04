export type OnlyNumber<T> = T extends string ? 
'error' : T extends object ? 
'error' : T extends any[] ? 
'error' : T extends boolean ?
'error' : T extends bigint ? 
'error' : T extends symbol ? 
'error' : T extends string | undefined ? 
'error' : number;