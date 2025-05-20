// __tests__/lib/sentry.test.ts
import * as Sentry from '@sentry/react-native'
import { captureException, captureMessage, initSentry } from './sentry'

jest.mock('@sentry/react-native', () => ({
  init: jest.fn(),
  captureException: jest.fn(),
  captureMessage: jest.fn(),
}))

jest.mock('@/shared/config/env/env', () => ({
  env: { SENTRY_DSN: 'fake-dsn', NODE_ENV: 'production' },
}))

describe('Sentry Integration', () => {
  const originalEnv = process.env

  beforeEach(() => {
    jest.clearAllMocks()
    jest.resetModules()
  })

  afterAll(() => {
    process.env = originalEnv
  })

  it('should initialize Sentry when DSN is provided', () => {
    const { env } = require('@/shared/config/env/env')
    initSentry()

    expect(Sentry.init).toHaveBeenCalledWith({
      dsn: env.SENTRY_DSN,
      tracesSampleRate: 1.0,
      enableAutoSessionTracking: true,
      sessionTrackingIntervalMillis: 30000,
    })
  })

  it('should not initialize Sentry when DSN is not provided', () => {
    jest.doMock('@/shared/config/env/env', () => ({
      env: { SENTRY_DSN: '', NODE_ENV: 'production' },
    }))
    const { initSentry } = require('./sentry')
    initSentry()

    expect(Sentry.init).not.toHaveBeenCalled()
  })

  it('should log message in development if DSN is not provided', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    jest.doMock('@/shared/config/env/env', () => ({
      env: { SENTRY_DSN: '', NODE_ENV: 'development' },
    }))
    const { initSentry } = require('./sentry')
    initSentry()

    expect(logSpy).toHaveBeenCalledWith(
      'Sentry DSN not provided, skipping initialization',
    )
    logSpy.mockRestore()
  })

  it('should capture exceptions when DSN is provided', () => {
    const error = new Error('Test Error')
    captureException(error)

    expect(Sentry.captureException).toHaveBeenCalledWith(error)
  })

  it('should not capture exception when DSN is missing', () => {
    jest.doMock('@/shared/config/env/env', () => ({
      env: { SENTRY_DSN: '', NODE_ENV: 'production' },
    }))
    const { captureException } = require('./sentry')
    const error = new Error('Another error')
    captureException(error)

    expect(Sentry.captureException).not.toHaveBeenCalled()
  })

  it('should capture message when DSN is provided', () => {
    captureMessage('test message')

    expect(Sentry.captureMessage).toHaveBeenCalledWith('test message')
  })

  it('should not capture message when DSN is missing', () => {
    jest.doMock('@/shared/config/env/env', () => ({
      env: { SENTRY_DSN: '', NODE_ENV: 'production' },
    }))

    const { captureMessage } = require('./sentry')
    captureMessage('message that should not be sent')

    expect(Sentry.captureMessage).not.toHaveBeenCalled()
  })
})
