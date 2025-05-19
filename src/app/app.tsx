import React, { useEffect } from 'react'
import { ThemeProvider } from '@emotion/react'

import { Navigation } from './routes'
import { initSentry } from '@/shared/config'
import { LoadingIndicator } from '@/components/common/LoadingIndicator'
import { createTheme } from '@/theme'
import { useTheme } from '@/hooks/useTheme'

function AppContent() {
  const { themeMode } = useTheme()
  const theme = createTheme(themeMode)

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <LoadingIndicator />
    </ThemeProvider>
  )
}

export function App() {
  useEffect(() => {
    initSentry()
  }, [])

  return <AppContent />
}
