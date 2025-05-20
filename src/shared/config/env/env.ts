import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  SENTRY_DSN: z.string().min(1).optional(),
})

type Env = z.infer<typeof envSchema>

function validateEnv(): Env {
  try {
    return envSchema.parse({
      NODE_ENV: process.env.NODE_ENV,
      SENTRY_DSN: process.env.SENTRY_DSN,
    })
  } catch (error) {
    throw new Error('Invalid environment variables')
  }
}

export const env = validateEnv()
