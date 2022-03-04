declare global {
  interface Math {
    /**
     * `From @dulysse1/better-node`
     * ### Convert your degrees into radians
     * @param deg Your angle in degrees
     * @return {number} Your angle in radians.
     */
    radians(deg: number): number;
  }
}
export {};