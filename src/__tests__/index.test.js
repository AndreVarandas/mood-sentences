const Moods = require('../index')

describe('mood-sentences', () => {
  test('.all should return all sentences', () => {
    const all = require('../mood-sentences.json')
    expect(Moods.all).toMatchObject(all)
  })

  test('.anger should return all anger sentences', () => {
    const { anger } = require('../mood-sentences.json')
    expect(Moods.anger).toMatchObject(anger)
  })

  test('.boredom should return all boredom sentences', () => {
    const { boredom } = require('../mood-sentences.json')
    expect(Moods.boredom).toMatchObject(boredom)
  })

  test('.excitement should return all excitement sentences', () => {
    const { excitement } = require('../mood-sentences.json')
    expect(Moods.excitement).toMatchObject(excitement)
  })

  test('.happiness should return all happiness sentences', () => {
    const { happiness } = require('../mood-sentences.json')
    expect(Moods.happiness).toMatchObject(happiness)
  })

  test('.list should return a list of available moods', () => {
    const moods = require('../mood-sentences.json')

    const values = Object.values(Moods.list).sort()
    const expected = Object.keys(moods).sort()

    expect(values).toEqual(expected)
  })

  test('.random() should return a random sentence for a mood', () => {
    const randomSentence = Moods.getRandom(Moods.list.HAPPINESS)

    expect(Moods.happiness).toContain(randomSentence)
  })

  test('.random() without mood, it throws an error', () => {
    try {
      Moods.getRandom()
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Requested mood "undefined" is not in the moods list!')
    }
  })
})
