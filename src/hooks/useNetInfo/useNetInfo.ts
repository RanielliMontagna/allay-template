import { useAppStore } from '@/shared/stores'
import NetInfo from '@react-native-community/netinfo'

import { useEffect } from 'react'

export function useNetInfo() {
  const { isConnected, setIsConnected } = useAppStore()

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(Boolean(state.isConnected))
    })

    // Cleanup the subscription on unmount
    return () => {
      unsubscribe()
    }
  }, [setIsConnected])

  return { isConnected }
}
