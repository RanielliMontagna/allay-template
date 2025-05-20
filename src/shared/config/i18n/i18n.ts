import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Localization from 'expo-localization'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEn from '@/locales/en-US'
import translationPt from '@/locales/pt-BR'
import { env } from '../env/env'

const resources = {
  'pt-BR': { translation: translationPt },
  'en-US': { translation: translationEn },
}

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem('language')

  if (!savedLanguage) {
    savedLanguage = Localization.locale
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    resources,
    lng: savedLanguage,
    fallbackLng: env.NODE_ENV === 'test' ? 'en-US' : 'pt-BR',
    interpolation: {
      escapeValue: false,
    },
  })
}

export { i18n, initI18n }
