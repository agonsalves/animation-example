/**
 * Returns a promise that only resolves after a given time period (in milliseconds).
 * Used to space out events in an async function.
 *
 * @param ms
 * @returns {Promise<any>}
 */
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))