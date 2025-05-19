import React from 'react'
import { useTheme } from '@/hooks/useTheme'
import { HomeContainer, Title, ToggleButton, ButtonText } from './home.styles'

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
