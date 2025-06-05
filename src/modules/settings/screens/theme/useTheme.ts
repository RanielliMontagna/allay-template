import type { BottomSheetModal } from '@gorhom/bottom-sheet'

import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { useTheme as useThemeHook } from '@/hooks'

export function useTheme() {
  const { t } = useTranslation()
  const { theme, themeMode } = useThemeHook()

  const changeThemeBottomSheetRef = useRef<BottomSheetModal>(null)

  function handleOpenChangeThemeBottomSheet() {
    changeThemeBottomSheetRef.current?.present(0)
  }

  return {
    t,
    theme,
    themeMode,
    changeThemeBottomSheetRef,
    handleOpenChangeThemeBottomSheet,
  }
}
