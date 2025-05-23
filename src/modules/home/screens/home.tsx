import React, { useEffect } from 'react'
import Toast from 'react-native-toast-message'

import { useTheme } from '@/hooks'
import { useTranslation } from 'react-i18next'
import { ButtonText, HomeContainer, Title, ToggleButton } from './home.styles'

export function Home() {
  const { t } = useTranslation()
  const { themeMode, toggleTheme } = useTheme()

  function handleThemeChange() {
    toggleTheme()

    Toast.show({
      text1: t('home.themeChanged'),
      text2: t('home.themeChangedDescription', {
        theme: themeMode === 'dark' ? t('home.lightMode') : t('home.darkMode'),
      }),
    })
  }

  return (
    <HomeContainer>
      <Title testID="current-theme">
        {t('home.currentTheme')}:{' '}
        {themeMode === 'dark' ? t('home.darkMode') : t('home.lightMode')}
      </Title>
      <ToggleButton onPress={handleThemeChange}>
        <ButtonText>{t('home.changeTheme')}</ButtonText>
      </ToggleButton>
    </HomeContainer>
  )
}
