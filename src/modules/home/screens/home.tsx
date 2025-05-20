import React from 'react'

import { useTheme } from '@/hooks'
import { ButtonText, HomeContainer, Title, ToggleButton } from './home.styles'

export function Home() {
  const { themeMode, toggleTheme } = useTheme()

  return (
    <HomeContainer>
      <Title>Current Theme: {themeMode}</Title>
      <ToggleButton onPress={toggleTheme}>
        <ButtonText>Toggle Theme</ButtonText>
      </ToggleButton>
    </HomeContainer>
  )
}
