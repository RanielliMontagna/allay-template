import { colors } from './colors'
import { typography } from './typography'
import { spacing } from './spacing'
import { radius } from './radius'

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
