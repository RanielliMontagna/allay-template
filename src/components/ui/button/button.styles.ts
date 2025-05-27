import styled from '@emotion/native'
import type { StyledButtonProps } from './button.types'

import { resolveColor } from '@/shared/utils'
import { TouchableOpacity } from 'react-native'
import { getButtonPadding } from './button.helper'

export const ButtonContainer = styled(TouchableOpacity)<StyledButtonProps>`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme, variant, colorScheme }) =>
    variant === 'outline' || variant === 'ghost'
      ? 'transparent'
      : resolveColor(theme, colorScheme)};
  border: ${({ variant, theme, colorScheme }) =>
    variant === 'outline'
      ? `1px solid ${resolveColor(theme, colorScheme)}`
      : 'none'};

  ${({ disabled }) => disabled && 'opacity: 0.5;'}
  ${({ size }) => getButtonPadding(size)}
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`

export const ButtonText = styled.Text<StyledButtonProps>`
  font-size: ${({ size, theme }) =>
    size === 'sm'
      ? theme.typography.fontSize.sm
      : size === 'lg'
        ? theme.typography.fontSize.lg
        : theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme, variant, colorScheme }) =>
    variant === 'solid'
      ? theme.colors.white
      : resolveColor(theme, colorScheme)};
  ${({ isLoading }) => isLoading && 'opacity: 0;'}
`

export const LoadingOverlay = styled.View`
  position: absolute;
  inset: 0;
  justify-content: center;
  align-items: center;
`
