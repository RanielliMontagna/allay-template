import styled from '@emotion/native'
import Animated from 'react-native-reanimated'

import type {
  StyledAvatarContainerProps,
  StyledAvatarFallbackTextProps,
} from './avatar.types'

export const AvatarContainer = styled(
  Animated.View,
)<StyledAvatarContainerProps>`
    width: ${({ size }) => {
      switch (size) {
        case 'sm':
          return '40px'
        case 'md':
          return '60px'
        case 'lg':
          return '80px'
      }
    }};
    height: ${({ size }) => {
      switch (size) {
        case 'sm':
          return '40px'
        case 'md':
          return '60px'
        case 'lg':
          return '80px'
      }
    }};
    border-radius: ${({ shape, theme }) => (shape === 'circle' ? theme.radius.full : theme.radius.md)};
    overflow: hidden;

    background-color: ${({ theme }) => theme.colors.gray[200]};
    align-items: center;
    justify-content: center;
`

//  fontSize: size === 'sm' ? 12 : size === 'md' ? 16 : 22,
//     lineHeight: size === 'sm' ? 16 : size === 'md' ? 20 : 28,
//     color: theme.colors.gray[500],
//     fontWeight: 'bold',
export const AvatarFallbackText = styled.Text<StyledAvatarFallbackTextProps>`
    font-size: ${({ size, theme }) => {
      switch (size) {
        case 'sm':
          return theme.typography.fontSize.sm
        case 'md':
          return theme.typography.fontSize.md
        case 'lg':
          return theme.typography.fontSize.lg
      }
    }};
    line-height: ${({ size, theme }) => {
      switch (size) {
        case 'sm':
          return theme.typography.lineHeight.sm
        case 'md':
          return theme.typography.lineHeight.md
        case 'lg':
          return theme.typography.lineHeight.lg
      }
    }};

    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.gray[600]};

    text-align: center;
    text-transform: uppercase;

`
