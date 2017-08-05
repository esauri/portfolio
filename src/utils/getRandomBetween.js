/**
 * getRandomBetween - Returns a random number between two values given
 * @param {number} min
 * @param {number} max
 */
export function getRandomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
