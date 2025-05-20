import { env } from './env'

describe('env', () => {
  it('should have NODE_ENV defined', () => {
    expect(env.NODE_ENV).toBeDefined()
  })

  it("shouldn't have NODE_ENV defined", () => {
    process.env.NODE_ENV = ''
    jest.resetModules()
    expect(() => {
      const { env } = require('./env')
      env.NODE_ENV
    }).toThrow('Invalid environment variables')
  })
})
