import { useCallback, useEffect, useState } from 'react'
import { ThemeMode } from '../theme'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTheme as useEmotionTheme } from '@emotion/react'

const THEME_STORAGE_KEY = '@theme_mode'

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')
  const emotionTheme = useEmotionTheme()

  const toggleTheme = useCallback(async () => {
    const newMode: ThemeMode = themeMode === 'light' ? 'dark' : 'light'
    setThemeMode(newMode)
    await AsyncStorage.setItem(THEME_STORAGE_KEY, newMode)
  }, [themeMode])

  const setTheme = useCallback(async (mode: ThemeMode) => {
    setThemeMode(mode)
    await AsyncStorage.setItem(THEME_STORAGE_KEY, mode)
  }, [])

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY)
        if (savedTheme) {
          setThemeMode(savedTheme as ThemeMode)
        }
      } catch (error) {
        console.error('Error loading theme:', error)
      }
    }

    loadTheme()
  }, [])

  return {
    theme: emotionTheme,
    themeMode,
    toggleTheme,
    setTheme,
  }
}
