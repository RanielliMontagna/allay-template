import { render, waitFor } from '@/shared/utils/jest'
import { App } from '../app'
import translations from '@/locales/en-US'

describe('App', () => {
  it('should render the app', async () => {
    const { getByText } = render(<App />)

    await waitFor(() => {
      expect(getByText(translations.home.changeTheme)).toBeTruthy()
    })
  })
})
