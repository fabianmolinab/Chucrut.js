export const sum = (num1: number, num2: number): number => {
  const result = num1 + num2

  return result
}

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
