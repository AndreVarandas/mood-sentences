// Import our moods list
const moods = require('./mood-sentences.json')

/**
 * From the received array, returns a random element.
 *
 * @param {[]} array of items to choose from.
 *
 * @returns A random element from the array.
 */
const getRandomItemFromArray = (array) => array[Math.floor(Math.random() * array.length)]

/**
 * Enum of available moods.
 */
const list = {
  ANGER: 'anger',
  BOREDOM: 'boredom',
  EXCITEMENT: 'excitement',
  HAPPINESS: 'happiness'
}

/**
 * Gets a random sentence of the received mood.
 *
 * @param {list} mood to use.
 *
 * @throws Will throw if the received mood is not known, undefined or null
 *
 * @returns {string} a random sentence for the chosen mood.
 */
const getRandom = (mood) => {
  if (mood in moods) {
    return getRandomItemFromArray(moods[mood])
  }

  throw new Error(`Requested mood "${mood}" is not in the moods list!`)
}

module.exports = {
  all: moods,
  anger: moods.anger,
  boredom: moods.boredom,
  excitement: moods.excitement,
  happiness: moods.happiness,
  getRandom,
  list
}
