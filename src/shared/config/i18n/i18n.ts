import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Localization from 'expo-localization'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEn from '@/locales/en-US'
import translationPt from '@/locales/pt-BR'

const resources = {
  'pt-BR': { translation: translationPt },
  'en-US': { translation: translationEn },
}

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem('language')
  const languageTag = Localization.getLocales()[0]?.languageTag

  if (!savedLanguage) savedLanguage = languageTag

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    resources,
    lng: savedLanguage,
    fallbackLng: 'en-US',
    supportedLngs: ['pt-BR', 'en-US'],
    interpolation: { escapeValue: false },
    returnObjects: true,
  })
}

export { i18n, initI18n }
