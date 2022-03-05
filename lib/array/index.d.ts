export * from './average';
export * from './flat';
export * from './asc';
export * from './desc';
export * from './randomize';
export * from './first';
export * from './last';
export * from './drop';
export * from './sum';

declare global {
  interface Array {
    fill<S>(value: S, start?: number, end?: number): S[];
  }
}