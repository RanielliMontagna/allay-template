import { useTranslation } from 'react-i18next'
import { Ionicons } from '@expo/vector-icons'

import { Text } from '@/components'
import { useTheme } from '@/hooks'

import {
  IconContainer,
  PreferenceContainer,
  PreferenceDescriptionContainer,
  PreferenceOptionContainer,
} from '../settings.styles'

export function ThemeSettings() {
  const { theme, themeMode } = useTheme()
  const { t } = useTranslation()

  return (
    <PreferenceContainer testID="theme-settings">
      <PreferenceDescriptionContainer>
        <IconContainer>
          <Ionicons
            name={themeMode === 'light' ? 'sunny-outline' : 'moon-outline'}
            size={24}
            color={theme.colors.gray[900]}
          />
        </IconContainer>
        <Text>{t('settings.theme.title')}</Text>
      </PreferenceDescriptionContainer>
      <PreferenceOptionContainer>
        <Text color="gray.500" size="sm">
          {themeMode === 'light' && t('settings.theme.light')}
          {themeMode === 'dark' && t('settings.theme.dark')}
        </Text>
        <Ionicons
          name="chevron-forward-outline"
          size={18}
          color={theme.colors.gray[500]}
        />
      </PreferenceOptionContainer>
    </PreferenceContainer>
  )
}
