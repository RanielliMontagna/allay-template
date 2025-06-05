const lightColors = {
  primary: '#4F46E5', // Indigo 600
  background: '#FFFFFF', // White
  secondary: '#312E81', // Light Indigo
  text: '#1F2937', // Dark Gray
  error: '#EF4444', // Red 500
  success: '#10B981', // Green 500
  warning: '#F59E0B', // Amber 500
  info: '#3B82F6', // Blue 500
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  white: '#FFFFFF',
  black: '#000000',
}

const darkColors = {
  primary: '#6366F1', // Indigo 500
  background: '#0D1117',
  secondary: '#312E81',
  text: '#F9FAFB',
  error: '#EF4444',
  warning: '#EAB308',
  success: '#22C55E',
  info: '#60A5FA',
  gray: {
    50: '#161B22',
    100: '#1E2430',
    200: '#272E3B',
    300: '#323945',
    400: '#4B5563',
    500: '#6B7280',
    600: '#9CA3AF',
    700: '#D1D5DB',
    800: '#E5E7EB',
    900: '#F9FAFB',
  },
  white: '#FFFFFF',
  black: '#000000',
}

export const colors = {
  light: lightColors,
  dark: darkColors,
}

export type Color = keyof typeof lightColors | keyof typeof darkColors
export type Colors = typeof lightColors | typeof darkColors
type GrayKey = keyof typeof lightColors.gray
export type GrayColor = `gray.${GrayKey}`
export type ColorKey = keyof typeof lightColors | GrayColor
