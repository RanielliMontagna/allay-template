import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

import { useTheme } from '@/hooks/useTheme'
import { useAppStore } from '@/shared/stores/app'

export const LoadingIndicator: React.FC = () => {
  const { theme } = useTheme()
  const { isLoading } = useAppStore()

  if (!isLoading) return null

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
})
