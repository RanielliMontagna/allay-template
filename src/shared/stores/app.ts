import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type ThemeMode = 'light' | 'dark'

interface AppState {
  isLoading: boolean
  themeMode: ThemeMode
  setLoading: (loading: boolean) => void
  setTheme: (mode: ThemeMode) => Promise<void>
  toggleTheme: () => Promise<void>
  initTheme: () => Promise<void>
}

const THEME_STORAGE_KEY = '@theme_mode'

export const useAppStore = create<AppState>()((set, get) => ({
  isLoading: false,
  themeMode: 'light',

  setLoading: (loading: boolean) => set({ isLoading: loading }),

  setTheme: async (mode: ThemeMode) => {
    set({ themeMode: mode })
    await AsyncStorage.setItem(THEME_STORAGE_KEY, mode)
  },

  toggleTheme: async () => {
    const current = get().themeMode
    const newMode = current === 'light' ? 'dark' : 'light'
    set({ themeMode: newMode })
    await AsyncStorage.setItem(THEME_STORAGE_KEY, newMode)
  },

  initTheme: async () => {
    try {
      const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY)
      if (savedTheme === 'light' || savedTheme === 'dark') {
        set({ themeMode: savedTheme })
      }
    } catch (error) {
      console.error('Error loading theme from storage:', error)
    }
  },
}))
