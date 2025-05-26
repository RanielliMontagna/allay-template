import styled from '@emotion/native'
import type { CustomButtonProps } from './button.types'

import { resolveColor } from '@/shared/utils/resolveColor'
import { TouchableOpacity } from 'react-native'
import { getButtonPadding } from './button.helper'

export const ButtonContainer = styled(TouchableOpacity)<CustomButtonProps>`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme, variant, colorScheme }) =>
    variant === 'outline' || variant === 'ghost'
      ? 'transparent'
      : resolveColor(theme, colorScheme ?? 'primary')};
  border: ${({ variant, theme, colorScheme }) =>
    variant === 'outline'
      ? `1px solid ${resolveColor(theme, colorScheme ?? 'primary')}`
      : 'none'};

  ${({ disabled }) => disabled && 'opacity: 0.5;'}
  ${({ size }) => getButtonPadding(size ?? 'md')}
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`

export const ButtonText = styled.Text<CustomButtonProps>`
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
      : resolveColor(theme, colorScheme ?? 'primary')};
  ${({ isLoading }) => isLoading && 'opacity: 0;'}
`

export const LoadingOverlay = styled.View`
  position: absolute;
  inset: 0;
  justify-content: center;
  align-items: center;
`;