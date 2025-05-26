import React from 'react'
import Toast from 'react-native-toast-message'

import { Text } from '@/components'
import { useTheme } from '@/hooks'
import { useTranslation } from 'react-i18next'
import { ButtonText, HomeContainer, ToggleButton } from './home.styles'

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
      <Text testID="current-theme" size="lg" weight="bold">
        {t('home.currentTheme')}:{' '}
        {themeMode === 'dark' ? t('home.darkMode') : t('home.lightMode')}
      </Text>
      <ToggleButton onPress={handleThemeChange}>
        <ButtonText>{t('home.changeTheme')}</ButtonText>
      </ToggleButton>
    </HomeContainer>
  )
}
