import React, { useEffect } from 'react'
import { ThemeProvider } from '@emotion/react'

import { Navigation } from './routes'
import { initSentry } from '@/shared/config'
import { LoadingIndicator } from '@/components/common/LoadingIndicator'
import { createTheme } from '@/theme'
import { useAppStore } from '@/shared/stores'

function AppContent() {
  const { themeMode, initTheme } = useAppStore()

  useEffect(() => {
    initTheme()
  }, [])

  return (
    <ThemeProvider theme={createTheme(themeMode)}>
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
