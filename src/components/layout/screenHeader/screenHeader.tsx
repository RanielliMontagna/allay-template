import { BackButton, ScreenHeaderContainer } from './screenHeader.styles'
import type { ScreenHeaderProps } from './screenHeader.types'

import { Ionicons } from '@expo/vector-icons'
import { Text } from '@/components/ui/text/text'
import { useTheme } from '@/hooks'

export function ScreenHeader({ title, handleBack }: ScreenHeaderProps) {
  const { theme } = useTheme()

  return (
    <ScreenHeaderContainer>
      {handleBack && (
        <BackButton onPress={handleBack}>
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
