const sumArray = require('../Fresh_Prep/sumArr')

test('Confirm summation is working', () => {
    expect(sumArray([2, 4, 6, 4, 3])).toEqual(19)
})

test('throws an error if the input is not an array', () => {
    expect(() => sumArray('not an array')).toThrow(TypeError);
    expect(() => sumArray(123)).toThrow(TypeError);
    expect(() => sumArray({})).toThrow(TypeError);
});