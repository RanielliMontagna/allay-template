const fontFamily = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
}

const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
}

const fontSizeWithPx = Object.fromEntries(
  Object.entries(fontSize).map(([key, value]) => [key, `${value}px`]),
) as Record<keyof typeof fontSize, string>

const lineHeight = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
  '2xl': 36,
  '3xl': 40,
  '4xl': 48,
}

const lineHeightWithPx = Object.fromEntries(
  Object.entries(lineHeight).map(([key, value]) => [key, `${value}px`]),
) as Record<keyof typeof lineHeight, string>

export const typography = {
  fontFamily,
  fontSize: fontSizeWithPx,
  lineHeight: lineHeightWithPx,
}
