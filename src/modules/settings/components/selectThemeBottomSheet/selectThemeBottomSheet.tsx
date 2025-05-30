import React, { useEffect } from 'react'

import { BottomSheet, Text } from '@/components'
import { Ionicons } from '@expo/vector-icons'
import { useTranslation } from 'react-i18next'

import { useTheme } from '@/hooks'

import type { BottomSheetModal } from '@gorhom/bottom-sheet'
import {
  BottomSheetContainer,
  ThemeHeaderContainer,
  ThemeIconContainer,
  ThemeOptionContainer,
} from './selectThemeBottomSheet.styles'

import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  ZoomIn,
} from 'react-native-reanimated'
import EnFlag from '../../assets/flags/en'
import PtFlag from '../../assets/flags/pt'

type SelectThemeBottomSheetProps = Omit<
  React.ComponentProps<typeof BottomSheet>,
  'children'
>

export const SelectThemeBottomSheet = React.forwardRef<
  BottomSheetModal,
  SelectThemeBottomSheetProps
>(function SelectThemeBottomSheet(props, ref) {
  const { ...rest } = props
  const { theme, themeMode, toggleTheme } = useTheme()
  const { t } = useTranslation()

  const themeOtions = [
    {
      code: 'light',
      label: t('settings.theme.light'),
      isSelected: themeMode === 'light',
      icon: (
        <Ionicons
          name="sunny-outline"
          size={24}
          color={theme.colors.gray[900]}
        />
      ),
    },
    {
      code: 'dark',
      label: t('settings.theme.dark'),
      isSelected: themeMode === 'dark',
      icon: (
        <Ionicons
          name="moon-outline"
          size={24}
          color={theme.colors.gray[900]}
        />
      ),
    },
  ]

  return (
    <BottomSheet ref={ref} {...rest}>
      <BottomSheetContainer>
        <ThemeHeaderContainer>
          <ThemeIconContainer>
            <Ionicons
              name="color-palette-outline"
              size={24}
              color={theme.colors.gray[900]}
            />
          </ThemeIconContainer>
          <Text size="lg" weight="bold">
            {t('settings.theme.select')}
          </Text>
          <Text color="gray.500" size="sm">
            {t('settings.theme.selectDescription')}
          </Text>
        </ThemeHeaderContainer>
        {themeOtions.map(option => {
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
              <ThemeOptionContainer
                testID={`theme-option-${option.code}`}
                isSelected={option.isSelected}
                onPress={() => {
                  if (option.isSelected) return
                  toggleTheme()
                }}
              >
                <View
                  style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
                >
                  {option.icon}
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
              </ThemeOptionContainer>
            </Animated.View>
          )
        })}
      </BottomSheetContainer>
    </BottomSheet>
  )
})
