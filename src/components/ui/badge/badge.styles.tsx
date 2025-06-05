import styled from '@emotion/native'
import Animated from 'react-native-reanimated'

import { Text } from '../text/text'
import type { BadgeStylesProps } from './badge.types'

export const BadgeContainer = styled(Animated.View)<BadgeStylesProps>`
    border-radius: ${({ theme }) => theme.radius.md};
    font-size: ${({ theme, size }) => theme.typography.fontSize[size]};
    padding: ${({ theme, size }) => {
      if (size === 'sm') {
        return `${theme.spacing[0]} ${theme.spacing[1.5]}`
      }
      if (size === 'lg') {
        return `${theme.spacing[1]} ${theme.spacing[3]}`
      }
      return `${theme.spacing[0.5]} ${theme.spacing[2]}`
    }};

    background-color: ${({ theme, color, variant }) =>
      variant === 'solid' ? theme.colors[color] : 'transparent'};
    
    border: ${({ theme, color, variant }) =>
      variant === 'outline' ? `1px solid ${theme.colors[color]}` : 'none'};
      
`

export const BadgeText = styled(Text)<BadgeStylesProps>`
    color: ${({ theme, color, variant }) =>
      variant === 'outline' ? theme.colors[color] : theme.colors.white};
`
