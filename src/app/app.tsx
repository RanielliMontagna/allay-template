import { ThemeProvider } from '@emotion/react'
import { QueryClientProvider } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import Toast from 'react-native-toast-message'

import * as SplashScreen from 'expo-splash-screen'

import { LoadingIndicator, OfflineBar } from '@/components'
import {
  i18n,
  initI18n,
  initSentry,
  queryClient,
  toastConfig,
} from '@/shared/config'

import { useAppStore } from '@/shared/stores'
import { createTheme } from '@/theme'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
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
    <SafeAreaProvider>
      <StatusBar
        barStyle={themeMode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={createTheme(themeMode)}>
            <Navigation />
            <LoadingIndicator />
            <OfflineBar />
            <Toast config={toastConfig} position="bottom" bottomOffset={58} />
          </ThemeProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </SafeAreaProvider>
  )
}

export function App() {
  useEffect(() => {
    initSentry()
  }, [])

  return <AppContent />
}
