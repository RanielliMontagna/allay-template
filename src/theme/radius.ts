export const radius = {
  none: 0,
  sm: 2,
  base: 4,
  md: 6,
  lg: 8,
  xl: 12,
  '2xl': 16,
  '3xl': 24,
  full: 9999,
}

export const radiusWithPx = Object.fromEntries(
  Object.entries(radius).map(([key, value]) => [key, `${value}px`]),
) as Record<keyof typeof radius, string>
