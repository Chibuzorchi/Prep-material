const countLetters = require('../Fresh_Prep/countLet')

test('Count letters accurately', () => {
    expect(countLetters('Hello!')).toEqual({
        h: 1,
        e: 1,
        l: 2,
        o: 1
    })
})