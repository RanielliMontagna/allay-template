import React, { useEffect } from 'react'
import { ThemeProvider } from '@emotion/react'

import { Navigation } from './routes'

import { defaultTheme } from '@/commons/theme/defaultTheme'
import { initSentry } from '@/commons/utils/sentry'

export function App() {
  useEffect(() => {
    initSentry()
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navigation />
    </ThemeProvider>
  )
}
