const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('shuffle array with one element', () => {
    const input = [1]

    const output = shuffle(input)

    expect(output).toEqual(input)
  });

  test('shuffle array with multiple elements', () => {
    const input = [2,3]

    const output = shuffle(input)

    expect(output).toEqual(input)
  })

});
