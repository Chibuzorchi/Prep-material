const {countLetters} = require('../countChar')


test('Verify Characters are counted', () => {
    expect(countLetters("Hello Deel!")).toEqual({
       e: 3,
       l: 3,
       h: 1,
       o: 1,
       d: 1
    })
})

test('Verify it only counts alphabets', () => {
    expect(countLetters('word123, word11')).toEqual({
        w:2,
        o:2,
        r:2,
        d: 2
    })
})