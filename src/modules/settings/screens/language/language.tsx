import { Ionicons } from '@expo/vector-icons'

import { useTheme } from '@/hooks'
import { BottomSheet, Text } from '@/components'

import {
  IconContainer,
  PreferenceContainer,
  PreferenceDescriptionContainer,
  PreferenceOptionContainer,
} from '../settings.styles'
import { useLanguage } from './useLanguage'
import {
  BottomSheetContainer,
  LanguageHeaderContainer,
  LanguageIconContainer,
  LanguageOptionContainer,
} from './language.styles'
import { useTranslation } from 'react-i18next'

export function LanguageSettings() {
  const {
    t,
    isPortuguese,
    isEnglish,
    changeLanguageBottomSheetRef,
    handleOpenChangeLanguageBottomSheet,
  } = useLanguage()
  const { theme } = useTheme()
  const { i18n } = useTranslation()

  return (
    <PreferenceContainer onPress={handleOpenChangeLanguageBottomSheet}>
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
      <BottomSheet ref={changeLanguageBottomSheetRef}>
        <BottomSheetContainer>
          <LanguageHeaderContainer>
            <LanguageIconContainer>
              <Ionicons
                name="earth-outline"
                size={24}
                color={theme.colors.gray[900]}
              />
            </LanguageIconContainer>
            <Text size="lg" weight="bold">
              {t('settings.language.select')}
            </Text>
            <Text color="gray.500" size="sm">
              {t('settings.language.selectDescription')}
            </Text>
          </LanguageHeaderContainer>
          {i18n.languages.map(language => (
            <LanguageOptionContainer
              key={language}
              isSelected={i18n.language === language}
            >
              <Text size="sm" color="gray.900">
                {language === 'pt-BR'
                  ? t('settings.language.pt')
                  : t('settings.language.en')}
              </Text>
              {i18n.language === language && (
                <Ionicons
                  name="checkmark-circle"
                  size={24}
                  color={theme.colors.primary}
                />
              )}
            </LanguageOptionContainer>
          ))}
        </BottomSheetContainer>
      </BottomSheet>
    </PreferenceContainer>
  )
}
