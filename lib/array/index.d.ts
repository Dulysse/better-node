export * from './average';
export * from './flat';
export * from './asc';
export * from './desc';
export * from './randomize';
export * from './first';
export * from './last';
export * from './drop';
export * from './sum';
export * from './copy';
export * from './insert';
export * from './update';
export * from './shuffle';
export * from './replace';
export * from './replaceAll';
declare global {
  interface Array {
    fill<S extends any>(value: S, start?: number, end?: number): S[];
  }
}