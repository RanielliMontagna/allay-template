import '@emotion/react'

import type { ThemeMode } from '@/theme'
import type { Colors } from '@/theme/colors'
import type { Radius } from '@/theme/radius'
import type { Spacing } from '@/theme/spacing'
import type {
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
} from '@/theme/typography'

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors
    typography: {
      fontFamily: FontFamily
      fontSize: FontSize
      fontWeight: FontWeight
      lineHeight: LineHeight
    }
    spacing: Spacing
    radius: Radius
    mode: ThemeMode
  }
}
