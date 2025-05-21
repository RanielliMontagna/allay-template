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
      white: string
      black: string
    }
    typography: {
      fontFamily: {
        regular: string
        medium: string
        bold: string
      }
      fontSize: {
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
        '3xl': string
        '4xl': string
      }
      lineHeight: {
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
        '3xl': string
        '4xl': string
      }
    }
    spacing: {
      px: string
      0: string
      0.5: string
      1: string
      1.5: string
      2: string
      2.5: string
      3: string
      3.5: string
      4: string
      5: string
      6: string
      7: string
      8: string
      9: string
      10: string
      11: string
      12: string
      14: string
      16: string
      20: string
      24: string
      28: string
      32: string
      36: string
      40: string
      44: string
      48: string
      52: string
      56: string
      60: string
      64: string
      72: string
      80: string
      96: string
    }
    radius: {
      none: string
      sm: string
      base: string
      md: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      full: string
    }
  }
}
