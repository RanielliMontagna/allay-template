import { colors } from './colors'
import { radius } from './radius'
import { spacing } from './spacing'
import { typography } from './typography'

export type ThemeMode = 'light' | 'dark'

export const createTheme = (mode: ThemeMode = 'light') => ({
  colors: colors[mode],
  typography,
  spacing,
  radius,
  mode,
})

export const theme = createTheme()

export type Theme = ReturnType<typeof createTheme>
