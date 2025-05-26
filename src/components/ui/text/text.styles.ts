import styled from '@emotion/native'
import Animated from 'react-native-reanimated'
import type { CustomTextProps } from './text.types'

import { resolveColor } from '@/shared/utils/resolveColor'

export const StyledText = styled(Animated.Text)<CustomTextProps>`
  font-size: ${({ theme, size }) => theme.typography.fontSize[size]};
  font-weight: ${({ theme, weight }) => theme.typography.fontWeight[weight]};
  line-height: ${({ theme, lh }) => theme.typography.lineHeight[lh]};
  color: ${({ theme, color }) => resolveColor(theme, color)};
`
