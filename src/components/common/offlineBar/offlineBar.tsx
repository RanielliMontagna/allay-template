import React from 'react'
import { OfflineBarContainer, OfflineBarText } from './offlineBar.styles'

import { useAppStore } from '@/shared/stores'
import { useNetInfo } from '@/hooks'

const OfflineBar = () => {
  // Hook with isolated instance of network info manager
  useNetInfo()
  const { isConnected } = useAppStore()

  // Not show offline bar in production
  if (process.env.NODE_ENV === 'production') return null

  // Not show offline bar if online
  if (isConnected) return null

  return (
    <OfflineBarContainer testID="offline-bar">
      <OfflineBarText>OFFLINE MODE</OfflineBarText>
    </OfflineBarContainer>
  )
}

export { OfflineBar }
