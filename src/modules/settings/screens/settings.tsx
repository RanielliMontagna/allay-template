import { Text } from 'react-native'
import { useTranslation } from 'react-i18next'

import { SettingsContainer } from './settings.styles'

export function Settings() {
  const { t } = useTranslation()

  return (
    <SettingsContainer>
      <Text>{t('settings.title')}</Text>
      <Text>{t('settings.description')}</Text>
    </SettingsContainer>
  )
}
