import { colors } from './colors'
import { radiusWithPx } from './radius'
import { spacingWithPx } from './spacing'
import { typography } from './typography'

export type ThemeMode = 'light' | 'dark'

export const createTheme = (mode: ThemeMode = 'light') => ({
  colors: colors[mode],
  typography,
  spacing: spacingWithPx,
  radius: radiusWithPx,
  mode,
})

export const theme = createTheme()

export type Theme = ReturnType<typeof createTheme>
