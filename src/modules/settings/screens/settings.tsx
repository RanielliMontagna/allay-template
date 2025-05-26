import { useTranslation } from 'react-i18next'

import { Text } from '@/components'
import { SettingsContainer } from './settings.styles'

export function Settings() {
  const { t } = useTranslation()

  return (
    <SettingsContainer>
      <Text weight="bold" size="lg">
        {t('settings.title')}
      </Text>
      <Text>{t('settings.description')}</Text>
    </SettingsContainer>
  )
}
