import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      background: string
      secondary: string
      text: string
      error: string
      success: string
      warning: string
      info: string
      gray: {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
    }
    typography: {
      fontFamily: {
        regular: string
        medium: string
        bold: string
      }
      fontSize: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
        '2xl': number
        '3xl': number
        '4xl': number
      }
      lineHeight: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
        '2xl': number
        '3xl': number
        '4xl': number
      }
    }
    spacing: {
      px: number
      0: number
      0.5: number
      1: number
      1.5: number
      2: number
      2.5: number
      3: number
      3.5: number
      4: number
      5: number
      6: number
      7: number
      8: number
      9: number
      10: number
      11: number
      12: number
      14: number
      16: number
      20: number
      24: number
      28: number
      32: number
      36: number
      40: number
      44: number
      48: number
      52: number
      56: number
      60: number
      64: number
      72: number
      80: number
      96: number
    }
    radius: {
      none: number
      sm: number
      base: number
      md: number
      lg: number
      xl: number
      '2xl': number
      '3xl': number
      full: number
    }
  }
}
