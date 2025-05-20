import React from 'react'

import { useTheme } from '@/hooks'
import { useTranslation } from 'react-i18next'
import { ButtonText, HomeContainer, Title, ToggleButton } from './home.styles'

export function Home() {
  const { t } = useTranslation()
  const { themeMode, toggleTheme } = useTheme()

  return (
    <HomeContainer>
      <Title testID="current-theme">
        {t('home.currentTheme')}:{' '}
        {themeMode === 'dark' ? t('home.darkMode') : t('home.lightMode')}
      </Title>
      <ToggleButton onPress={toggleTheme}>
        <ButtonText>{t('home.changeTheme')}</ButtonText>
      </ToggleButton>
    </HomeContainer>
  )
}
