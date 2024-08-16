export class InternalError extends Error {}

/**
 * Gracefully handle errors as values.
 *
 * @example
 * ```ts
 * const [error, data] = await until(() => asyncAction())
 *
 * if (error) {
 *   // handle error
 *   return
 * }
 *
 * // data is now the response from asyncAction
 * ```
 */
export async function until<
  F extends (...args: unknown[]) => Promise<unknown>,
  E extends Error = Error,
>(promise: F): Promise<[null, Awaited<ReturnType<F>>] | [E, null]> {
  try {
    const data = await promise()

    return [null, data as Awaited<ReturnType<F>>]
  } catch (error) {
    return [error as E, null]
  }
}
