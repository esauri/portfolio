/**
 * getRandomIntBetween - Gets a random Int between two numbers
 * @param {number} min
 * @param {number} max
 */
export function getRandomIntBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}
