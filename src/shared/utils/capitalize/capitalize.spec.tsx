import { capitalize, capitalizeWords } from './capitalize'

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('world')).toBe('World')
  })

  it('should return an empty string when input is empty', () => {
    expect(capitalize('')).toBe('')
  })

  it('should capitalize the first letter of each word in a string', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World')
    expect(capitalizeWords('capitalize words')).toBe('Capitalize Words')
  })

  it('should handle multiple spaces between words', () => {
    expect(capitalizeWords('hello   world')).toBe('Hello   World')
  })

  it('should return an empty string when input is empty', () => {
    expect(capitalizeWords('')).toBe('')
  })
})
