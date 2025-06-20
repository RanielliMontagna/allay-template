import { useTranslation } from 'react-i18next'

import { Text } from '@/components'

import { LanguageSettings } from './language/language'
import { SettingsContainer } from './settings.styles'
import { ThemeSettings } from './theme/theme'

export function Settings() {
  const { t } = useTranslation()

  return (
    <SettingsContainer>
      <Text color="gray.700" size="sm">
        {t('settings.preferences')}
      </Text>
      <LanguageSettings />
      <ThemeSettings />
    </SettingsContainer>
  )
}
