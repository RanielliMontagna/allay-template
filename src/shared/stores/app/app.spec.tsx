import { useAppStore } from '@/shared/stores'
import AsyncStorage from '@react-native-async-storage/async-storage'

describe('useAppStore', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    useAppStore.setState({
      isConnected: true,
      isLoading: false,
      themeMode: 'light',
    })
  })

  it('should set loading state', () => {
    useAppStore.getState().setLoading(true)
    expect(useAppStore.getState().isLoading).toBe(true)
  })

  it('should set isConnected state', () => {
    useAppStore.getState().setIsConnected(false)
    expect(useAppStore.getState().isConnected).toBe(false)
  })

  it('should set theme and persist it in AsyncStorage', async () => {
    await useAppStore.getState().setTheme('dark')
    expect(useAppStore.getState().themeMode).toBe('dark')
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('@theme_mode', 'dark')
  })

  it('should toggle theme from light to dark', async () => {
    useAppStore.setState({ themeMode: 'light' })
    await useAppStore.getState().toggleTheme()
    expect(useAppStore.getState().themeMode).toBe('dark')
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('@theme_mode', 'dark')
  })

  it('should toggle theme from dark to light', async () => {
    useAppStore.setState({ themeMode: 'dark' })
    await useAppStore.getState().toggleTheme()
    expect(useAppStore.getState().themeMode).toBe('light')
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('@theme_mode', 'light')
  })

  it('should init theme from AsyncStorage (dark)', async () => {
    ;(AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce('dark')
    await useAppStore.getState().initTheme()
    expect(useAppStore.getState().themeMode).toBe('dark')
  })

  it('should not change themeMode if AsyncStorage returns invalid value', async () => {
    useAppStore.setState({ themeMode: 'light' })
    ;(AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce('invalid_theme')
    await useAppStore.getState().initTheme()
    expect(useAppStore.getState().themeMode).toBe('light')
  })

  it('should handle error in initTheme gracefully', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    ;(AsyncStorage.getItem as jest.Mock).mockRejectedValueOnce(
      new Error('fail'),
    )
    await useAppStore.getState().initTheme()
    expect(consoleSpy).toHaveBeenCalledWith(
      'Error loading theme from storage:',
      expect.any(Error),
    )
    consoleSpy.mockRestore()
  })
})
