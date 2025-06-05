import React, { useEffect } from 'react'

import { BottomSheet, Text } from '@/components'
import { Ionicons } from '@expo/vector-icons'
import { useTranslation } from 'react-i18next'

import { useTheme } from '@/hooks'

import type { BottomSheetModal } from '@gorhom/bottom-sheet'
import {
  BottomSheetContainer,
  LanguageHeaderContainer,
  LanguageIconContainer,
  LanguageOptionContainer,
} from './selectLanguageBottomSheet.styles'

import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  ZoomIn,
} from 'react-native-reanimated'
import EnFlag from '../../assets/flags/en'
import PtFlag from '../../assets/flags/pt'

type SelectLanguageBottomSheetProps = Omit<
  React.ComponentProps<typeof BottomSheet>,
  'children'
>

export const SelectLanguageBottomSheet = React.forwardRef<
  BottomSheetModal,
  SelectLanguageBottomSheetProps
>(function SelectLanguageBottomSheet(props, ref) {
  const { ...rest } = props
  const { theme } = useTheme()
  const { t, i18n } = useTranslation()

  const languageOtions = [
    {
      code: 'pt-BR',
      label: t('settings.language.pt'),
      isSelected: i18n.language === 'pt-BR',
      flag: <PtFlag />,
    },
    {
      code: 'en-US',
      label: t('settings.language.en'),
      isSelected: i18n.language === 'en-US',
      flag: <EnFlag />,
    },
  ]

  return (
    <BottomSheet ref={ref} {...rest}>
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
        {languageOtions.map(option => {
          const scale = useSharedValue(1)
          const opacity = useSharedValue(1)

          // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
          useEffect(() => {
            if (option.isSelected) {
              scale.value = withTiming(1.01, { duration: 300 })
              opacity.value = withTiming(1, { duration: 300 })
            } else {
              scale.value = withTiming(1, { duration: 300 })
              opacity.value = withTiming(0.8, { duration: 300 })
            }
          }, [option.isSelected])

          const animatedStyle = useAnimatedStyle(() => ({
            transform: [{ scale: scale.value }],
            opacity: opacity.value,
          }))

          return (
            <Animated.View
              key={option.code}
              style={[animatedStyle, { width: '100%' }]}
            >
              <LanguageOptionContainer
                testID={`language-option-${option.code}`}
                isSelected={option.isSelected}
                onPress={() => i18n.changeLanguage(option.code)}
              >
                <View
                  style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
                >
                  {option.flag}
                  <Text size="sm" color="gray.900">
                    {option.label}
                  </Text>
                </View>
                {option.isSelected && (
                  <Animated.View entering={ZoomIn.duration(300)}>
                    <Ionicons
                      name="checkmark-circle"
                      size={24}
                      color={theme.colors.primary}
                    />
                  </Animated.View>
                )}
              </LanguageOptionContainer>
            </Animated.View>
          )
        })}
      </BottomSheetContainer>
    </BottomSheet>
  )
})
