import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      background: string
      secondary: string
      text: string
    }
  }
}
