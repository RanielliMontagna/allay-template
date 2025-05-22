import type React from 'react'
import { ActivityIndicator } from 'react-native'

import { useTheme } from '@/hooks'
import { useAppStore } from '@/shared/stores/app/app'
import { LoadingIndicatorContainer } from './loadingIndicator.styles'

export const LoadingIndicator: React.FC = () => {
  const { theme } = useTheme()
  const { isLoading } = useAppStore()

  if (!isLoading) return null

  return (
    <LoadingIndicatorContainer>
      <ActivityIndicator
        testID="activity-indicator"
        size="large"
        color={theme.colors.primary}
      />
    </LoadingIndicatorContainer>
  )
}
