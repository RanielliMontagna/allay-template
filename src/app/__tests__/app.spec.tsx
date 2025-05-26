import translations from '@/locales/en-US'
import { useAppStore } from '@/shared/stores'
import { act, render, waitFor } from '@/shared/utils/jest'
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
    const { getByText } = render(<App />)

    await waitFor(() => {
      expect(getByText(translations.home.changeTheme)).toBeTruthy()
    })
  })

  it('should render with dark theme', async () => {
    const { getByText } = render(<App />)

    act(() => {
      // Set the theme to dark
      useAppStore.setState({ themeMode: 'dark' })
    })

    await waitFor(() => {
      expect(getByText(translations.home.changeTheme)).toBeTruthy()
    })
  })
})
