import { Ionicons } from '@expo/vector-icons'
import { useTranslation } from 'react-i18next'

import { Text } from '@/components'

import {
  IconContainer,
  PreferenceContainer,
  PreferenceDescriptionContainer,
  PreferenceOptionContainer,
} from '../settings.styles'
import { SelectThemeBottomSheet } from '../../components/selectThemeBottomSheet/selectThemeBottomSheet'
import { useTheme } from './useTheme'

export function ThemeSettings() {
  const {
    theme,
    themeMode,
    changeThemeBottomSheetRef,
    handleOpenChangeThemeBottomSheet,
  } = useTheme()
  const { t } = useTranslation()

  return (
    <PreferenceContainer
      testID="theme-settings"
      onPress={handleOpenChangeThemeBottomSheet}
    >
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
      <SelectThemeBottomSheet ref={changeThemeBottomSheetRef} />
    </PreferenceContainer>
  )
}
