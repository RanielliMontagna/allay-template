import { ThemeProvider } from '@emotion/react'
import { QueryClientProvider } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'

import * as SplashScreen from 'expo-splash-screen'

import { LoadingIndicator } from '@/components'
import { i18n, initI18n, initSentry, queryClient } from '@/shared/config'

import { useAppStore } from '@/shared/stores'
import { createTheme } from '@/theme'
import { Navigation } from './routes'

SplashScreen.preventAutoHideAsync()

function AppContent() {
  const { themeMode, initTheme } = useAppStore()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await Promise.all([initTheme(), initI18n()])
      } finally {
        setIsReady(true)
        await SplashScreen.hideAsync()
      }
    }

    initializeApp()
  }, [initTheme])

  if (!isReady) return <LoadingIndicator />

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={createTheme(themeMode)}>
          <Navigation />
          <LoadingIndicator />
        </ThemeProvider>
      </QueryClientProvider>
    </I18nextProvider>
  )
}

export function App() {
  useEffect(() => {
    initSentry()
  }, [])

  return <AppContent />
}
