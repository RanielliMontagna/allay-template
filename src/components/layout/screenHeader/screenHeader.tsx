import { BackButton, ScreenHeaderContainer } from './screenHeader.styles'
import type { ScreenHeaderProps } from './screenHeader.types'

import { Text } from '@/components/ui/text/text'
import { useTheme } from '@/hooks'
import { Ionicons } from '@expo/vector-icons'

export function ScreenHeader({ title, handleBack }: ScreenHeaderProps) {
  const { theme } = useTheme()

  return (
    <ScreenHeaderContainer>
      {handleBack && (
        <BackButton onPress={handleBack} testID="screen-header-back-button">
          <Ionicons
            name="arrow-back"
            size={22}
            color={theme.colors.gray[900]}
          />
        </BackButton>
      )}
      <Text>{title}</Text>
    </ScreenHeaderContainer>
  )
}
