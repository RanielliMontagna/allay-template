import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'

export type ThemeMode = 'light' | 'dark'

interface AppState {
  isLoading: boolean
  isConnected: boolean
  themeMode: ThemeMode
  setLoading: (loading: boolean) => void
  setTheme: (mode: ThemeMode) => Promise<void>
  setIsConnected: (isConnected: boolean) => void
  toggleTheme: () => Promise<void>
  initTheme: () => Promise<void>
}

const THEME_STORAGE_KEY = '@theme_mode'

export const useAppStore = create<AppState>()((set, get) => ({
  isConnected: true,
  isLoading: false,
  themeMode: 'light',

  setLoading: (loading: boolean) => set({ isLoading: loading }),
  setIsConnected: isConnected => set({ isConnected }),

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
