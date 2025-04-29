import React from 'react'
import { ThemeProvider } from '@emotion/react'

import { Navigation } from './routes'
import { defaultTheme } from '@/commons/theme/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navigation />
    </ThemeProvider>
  )
}
