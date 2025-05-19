import React, { useEffect } from 'react'
import { ThemeProvider } from '@emotion/react'

import { Navigation } from './routes'
import { defaultTheme, initSentry } from '@/shared/config'

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
