import * as Sentry from '@sentry/react-native'
import { env } from './env'

export const initSentry = () => {
  if (!env.SENTRY_DSN) {
    console.log('Sentry DSN not provided, skipping initialization')
    return
  }

  Sentry.init({
    dsn: env.SENTRY_DSN,
    tracesSampleRate: 1.0,
    enableAutoSessionTracking: true,
    sessionTrackingIntervalMillis: 30000,
  })
}

export const captureException = (error: Error) => {
  if (!env.SENTRY_DSN) return
  Sentry.captureException(error)
}

export const captureMessage = (message: string) => {
  if (!env.SENTRY_DSN) return
  Sentry.captureMessage(message)
}

export default Sentry
