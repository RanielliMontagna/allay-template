import { useAppStore } from '@/shared/stores'
import NetInfo from '@react-native-community/netinfo'
import { renderHook } from '@testing-library/react-native'
import { useNetInfo } from './useNetInfo'

jest.mock('@react-native-community/netinfo', () => ({
  addEventListener: jest.fn(),
}))

jest.mock('@/shared/stores', () => ({
  useAppStore: jest.fn(),
}))

describe('useNetInfo', () => {
  const mockSetIsConnected = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useAppStore as unknown as jest.Mock).mockReturnValue({
      isConnected: false,
      setIsConnected: mockSetIsConnected,
    })
  })

  it('deve inscrever e desinscrever corretamente do NetInfo', () => {
    const mockUnsubscribe = jest.fn()
    ;(NetInfo.addEventListener as jest.Mock).mockImplementation(callback => {
      callback({ isConnected: true })
      return mockUnsubscribe
    })

    const { unmount } = renderHook(() => useNetInfo())

    expect(mockSetIsConnected).toHaveBeenCalledWith(true)

    unmount()
    expect(mockUnsubscribe).toHaveBeenCalled()
  })
})
