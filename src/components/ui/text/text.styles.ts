import styled from '@emotion/native'
import Animated from 'react-native-reanimated'
import type { CustomTextProps } from './text.types'

type ThemeWithColors = {
  colors: {
    gray: Record<string, string>
    [key: string]: string | Record<string, string>
  }
}
const resolveColor = (theme: ThemeWithColors, color: string) => {
  if (color?.startsWith('gray.')) {
    const shade = color.split('.')[1]
    return theme.colors.gray[shade]
  }

  return theme.colors[color] as string
}

export const StyledText = styled(Animated.Text)<CustomTextProps>`
  font-size: ${({ theme, size }) => theme.typography.fontSize[size]};
  font-weight: ${({ theme, weight }) => theme.typography.fontWeight[weight]};
  line-height: ${({ theme, lh }) => theme.typography.lineHeight[lh]};
  color: ${({ theme, color }) => resolveColor(theme, color)};
`
