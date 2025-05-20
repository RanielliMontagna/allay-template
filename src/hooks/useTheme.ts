import { useAppStore } from '@/shared/stores'
import { useTheme as useEmotionTheme } from '@emotion/react'
export const useTheme = () => {
  const theme = useEmotionTheme()
  const themeMode = useAppStore(state => state.themeMode)
  const toggleTheme = useAppStore(state => state.toggleTheme)
  const setTheme = useAppStore(state => state.setTheme)

  return {
    theme,
    themeMode,
    toggleTheme,
    setTheme,
  }
}
