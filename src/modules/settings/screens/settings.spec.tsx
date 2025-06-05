import { act, fireEvent, render, waitFor } from '@/shared/utils/jest/jest'

import enTranslations from '@/locales/en-US'
import ptTranslations from '@/locales/pt-BR'
import { Settings } from './settings'

describe('Settings', () => {
  it('should render the settings screen', () => {
    const { getByText } = render(<Settings />)

    expect(getByText(enTranslations.settings.preferences)).toBeTruthy()
  })

  it('should open the language settings bottom sheet', async () => {
    const { getByTestId, getByText } = render(<Settings />)

    act(() => {
      fireEvent.press(getByTestId('language-settings'))
    })

    await waitFor(() => {
      expect(getByTestId('language-option-en-US')).toBeTruthy()
      expect(getByTestId('language-option-pt-BR')).toBeTruthy()
    })

    act(() => {
      fireEvent.press(getByTestId('language-option-pt-BR'))
    })

    await waitFor(() => {
      expect(getByText(ptTranslations.settings.preferences)).toBeTruthy()
    })
  })

  it('should open the theme settings bottom sheet', async () => {
    const { getByTestId, getByText, getAllByText } = render(<Settings />)

    // Open the theme settings bottom sheet
    act(() => {
      fireEvent.press(getByTestId('theme-settings'))
    })

    await waitFor(() => {
      expect(getAllByText(ptTranslations.settings.theme.light)).toHaveLength(2)
    })

    // Change the theme to dark
    act(() => {
      fireEvent.press(getByText(ptTranslations.settings.theme.dark))
    })

    await waitFor(() => {
      expect(getAllByText(ptTranslations.settings.theme.dark)).toHaveLength(2)
    })

    // Try to change to dark theme again
    act(() => {
      fireEvent.press(getAllByText(ptTranslations.settings.theme.dark)[1])
    })

    await waitFor(() => {
      expect(getAllByText(ptTranslations.settings.theme.dark)).toHaveLength(2)
    })
  })
})
