import translations from '@/locales/en-US'
import { useAppStore } from '@/shared/stores'
import { act, fireEvent, render, waitFor } from '@/shared/utils/jest/jest'
import { App } from '../app'

describe('App', () => {
  jest.spyOn(console, 'error').mockImplementation(message => {
    const messageString =
      'Warning: An update to %s inside a test was not wrapped in act'

    if (message.includes(messageString)) {
      return
    }
    console.error(message)
  })

  it('should render the app', async () => {
    const { getAllByText } = render(<App />)

    await waitFor(() => {
      expect(getAllByText(translations.home.title)).toHaveLength(3)
    })
  })

  it('should render with dark theme', async () => {
    const { getAllByText } = render(<App />)

    act(() => {
      // Set the theme to dark
      useAppStore.setState({ themeMode: 'dark' })
    })

    await waitFor(() => {
      expect(getAllByText(translations.home.title)).toHaveLength(3)
    })
  })

  it('should be able to back to the home screen', async () => {
    const { getByText, getAllByText, getByTestId } = render(<App />)

    await waitFor(() => {
      expect(getAllByText(translations.home.title)).toHaveLength(3)
    })

    act(() => {
      // Navigate to the settings screen
      fireEvent.press(getByText(translations.settings.title))
    })

    act(() => {
      // Simulate a back button press
      fireEvent.press(getByTestId('screen-header-back-button'))
    })

    await waitFor(() => {
      expect(getAllByText(translations.home.title)).toHaveLength(3)
    })
  })
})
