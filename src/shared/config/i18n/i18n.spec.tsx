import AsyncStorage from '@react-native-async-storage/async-storage'
import i18n from 'i18next'
import { initI18n } from './i18n'

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
}))

jest.mock('expo-localization', () => ({
  getLocales: jest.fn(() => [{ languageTag: 'pt-BR' }]),
}))

jest.mock('i18next', () => ({
  use: jest.fn().mockReturnThis(),
  init: jest.fn().mockResolvedValue(undefined),
}))

describe('initI18n', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should use saved language if available (else path)', async () => {
    ;(AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce('en-US')

    await initI18n()

    expect(i18n.init).toHaveBeenCalledWith(
      expect.objectContaining({
        lng: 'en-US',
      }),
    )
  })

  it('should use device language if no saved language exists (if path)', async () => {
    ;(AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(null)

    await initI18n()

    expect(i18n.init).toHaveBeenCalledWith(
      expect.objectContaining({
        lng: 'pt-BR',
      }),
    )
  })
})
