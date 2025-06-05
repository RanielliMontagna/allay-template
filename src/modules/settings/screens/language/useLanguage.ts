import type { BottomSheetModal } from '@gorhom/bottom-sheet'

import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

export function useLanguage() {
  const { t, i18n } = useTranslation()

  const isPortuguese = i18n.language === 'pt-BR'
  const isEnglish = i18n.language === 'en-US'

  const changeLanguageBottomSheetRef = useRef<BottomSheetModal>(null)

  function handleOpenChangeLanguageBottomSheet() {
    changeLanguageBottomSheetRef.current?.present(0)
  }

  return {
    t,
    isEnglish,
    isPortuguese,
    changeLanguageBottomSheetRef,
    handleOpenChangeLanguageBottomSheet,
  }
}
