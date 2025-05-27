import React from 'react'
import { useTranslation } from 'react-i18next'
import Toast from 'react-native-toast-message'

import { Ionicons } from '@expo/vector-icons'

import { Avatar, Badge, Button, Text } from '@/components'
import { useTheme } from '@/hooks'

import { HomeContainer } from './home.styles'

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
      <Badge size="sm" color="success">
        Teste
      </Badge>
      <Avatar fallbackSource="Matheus Cunha" size="lg" shape="circle" />
      <Text testID="current-theme" size="lg" weight="bold">
        {t('home.currentTheme')}:{' '}
        {themeMode === 'dark' ? t('home.darkMode') : t('home.lightMode')}
      </Text>
      <Button
        startAdornment={
          <Ionicons
            name={themeMode === 'dark' ? 'sunny' : 'moon'}
            size={18}
            color="white"
          />
        }
        onPress={handleThemeChange}
      >
        {t('home.changeTheme')}
      </Button>
    </HomeContainer>
  )
}
