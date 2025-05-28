import { useTranslation } from 'react-i18next'

import { Ionicons } from '@expo/vector-icons'

import { Text } from '@/components'
import { useTheme } from '@/hooks'

import {
  IconContainer,
  PreferenceContainer,
  PreferenceDescriptionContainer,
  PreferenceOptionContainer,
  SettingsContainer,
} from './settings.styles'

export function Settings() {
  const { theme, themeMode } = useTheme()
  const { t, i18n } = useTranslation()

  const isPortuguese = i18n.language === 'pt-BR'
  const isEnglish = i18n.language === 'en-US'

  return (
    <SettingsContainer>
      <Text color="gray.700">{t('settings.preferences')}</Text>
      <PreferenceContainer>
        <PreferenceDescriptionContainer>
          <IconContainer>
            <Ionicons
              name="language-outline"
              size={24}
              color={theme.colors.gray[900]}
            />
          </IconContainer>
          <Text>{t('settings.language.title')}</Text>
        </PreferenceDescriptionContainer>
        <PreferenceOptionContainer>
          <Text color="gray.500" size="sm">
            {isPortuguese && t('settings.language.pt')}
            {isEnglish && t('settings.language.en')}
          </Text>
          <Ionicons
            name="chevron-forward-outline"
            size={18}
            color={theme.colors.gray[500]}
          />
        </PreferenceOptionContainer>
      </PreferenceContainer>
      <PreferenceContainer>
        <PreferenceDescriptionContainer>
          <IconContainer>
            <Ionicons
              name="moon-outline"
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
    </SettingsContainer>
  )
}
