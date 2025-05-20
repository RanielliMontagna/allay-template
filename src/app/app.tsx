import { ThemeProvider } from '@emotion/react'
import React, { useEffect } from 'react'

import { LoadingIndicator } from '@/components/common/LoadingIndicator'
import { initSentry } from '@/shared/config'
import { useAppStore } from '@/shared/stores'
import { createTheme } from '@/theme'
import { Navigation } from './routes'

function AppContent() {
  const { themeMode, initTheme } = useAppStore()

  useEffect(() => {
    initTheme()
  }, [initTheme])

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
