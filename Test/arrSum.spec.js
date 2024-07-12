const sumArray = require('../Fresh_Prep/sumArr')

test('Confirm it works with Arrays', () => {
    expect(sumArray([1, 3, 5, 7, 8])).toEqual(24)
    expect(sumArray([2, 3, 5])).toEqual(10)
    expect(sumArray([])).toEqual(0)
})

test('Ensure it does not accept non Array', () => {
    expect(() => sumArray((1, 3, 4, 4))).toThrow(TypeError)
    expect(() => sumArray({1: 4})).toThrow(TypeError)
    expect(() => sumArray('7')).toThrow(TypeError)
})