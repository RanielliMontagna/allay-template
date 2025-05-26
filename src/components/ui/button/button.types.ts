import type { ColorKey } from '@/theme/colors'
import type { TouchableOpacityProps } from 'react-native'

export type ButtonVariant = 'solid' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface CustomButtonProps extends TouchableOpacityProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  colorScheme?: ColorKey
  isDisabled?: boolean
  isLoading?: boolean
  startAdornment?: React.ReactNode
  fullWidth?: boolean
}

export type StyledButtonProps = Omit<
  CustomButtonProps,
  'colorScheme' | 'size'
> & {
  colorScheme: ColorKey
  size: ButtonSize
}
