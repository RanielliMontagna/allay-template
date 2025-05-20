import { ThemeProvider } from '@emotion/react'
import { QueryClientProvider } from '@tanstack/react-query'
import React, { useEffect } from 'react'

import { LoadingIndicator } from '@/components'
import { initSentry, queryClient } from '@/shared/config'
import { useAppStore } from '@/shared/stores'
import { createTheme } from '@/theme'
import { Navigation } from './routes'

function AppContent() {
  const { themeMode, initTheme } = useAppStore()

  useEffect(() => {
    initTheme()
  }, [initTheme])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={createTheme(themeMode)}>
        <Navigation />
        <LoadingIndicator />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export function App() {
  useEffect(() => {
    initSentry()
  }, [])

  return <AppContent />
}
