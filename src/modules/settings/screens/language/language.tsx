import { Ionicons } from '@expo/vector-icons'

import { Text } from '@/components'
import { useTheme } from '@/hooks'

import {
  IconContainer,
  PreferenceContainer,
  PreferenceDescriptionContainer,
  PreferenceOptionContainer,
} from '../settings.styles'
import { useLanguage } from './useLanguage'

import { SelectLanguageBottomSheet } from '../../components/selectLanguageBottomSheet/selectLanguageBottomSheet'

export function LanguageSettings() {
  const {
    t,
    isPortuguese,
    isEnglish,
    changeLanguageBottomSheetRef,
    handleOpenChangeLanguageBottomSheet,
  } = useLanguage()
  const { theme } = useTheme()

  return (
    <PreferenceContainer
      onPress={handleOpenChangeLanguageBottomSheet}
      testID="language-settings"
    >
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
      <SelectLanguageBottomSheet ref={changeLanguageBottomSheetRef} />
    </PreferenceContainer>
  )
}
