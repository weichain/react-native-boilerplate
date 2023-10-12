/**
 * @param x target
 * @param extraMessage Messages to help identify the cause of the problem if it should occur.
 */
export function nonNull<T>(x: T | null | undefined, extraMessage: string): T {
  if (x == null) {
    throw new Error(`Unexpected null / undefined. Should exist value. (${extraMessage})`);
  }

  return x;
}
