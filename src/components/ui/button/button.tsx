import { ActivityIndicator, View } from 'react-native'
import { ButtonContainer, ButtonText, LoadingOverlay } from './button.styles'
import type { CustomButtonProps } from './button.types'

export const Button: React.FC<CustomButtonProps> = ({
  children,
  variant = 'solid',
  size = 'md',
  colorScheme = 'primary',
  isDisabled = false,
  isLoading = false,
  fullWidth = false,
  startAdornment,
  ...rest
}) => {
  return (
    <ButtonContainer
      variant={variant}
      size={size}
      colorScheme={colorScheme}
      activeOpacity={0.8}
      disabled={isDisabled}
      fullWidth={fullWidth}
      {...rest}
    >
      {startAdornment && (
        <View style={{ marginRight: 8, opacity: isLoading ? 0 : 1 }}>
          {startAdornment}
        </View>
      )}
      <ButtonText
        variant={variant}
        size={size}
        colorScheme={colorScheme}
        isLoading={isLoading}
      >
        {children}
      </ButtonText>

      {isLoading && (
        <LoadingOverlay testID="loading-overlay">
          <ActivityIndicator
            color="#fff"
            size={size === 'lg' ? 'large' : 'small'}
          />
        </LoadingOverlay>
      )}
    </ButtonContainer>
  )
}

Button.displayName = 'Button'
