import type { TextProps as RNTextProps } from 'react-native'

import type { ColorKey } from '@/theme/colors'
import type { FontSize, FontWeight, LineHeight } from '@/theme/typography'

export interface CustomTextProps extends RNTextProps {
  size: keyof FontSize
  weight: keyof FontWeight
  lh: keyof LineHeight
  children: React.ReactNode
  color: ColorKey
}
