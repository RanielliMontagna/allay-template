import { act, fireEvent, render } from '@/shared/utils/jest'

import { Home } from './home'
import translations from '@/locales/en-US'

describe('Home', () => {
  it('should render the home screen', () => {
    const { getByText } = render(<Home />)

    expect(getByText(translations.home.changeTheme)).toBeTruthy()
  })

  it('should be able to change the theme', async () => {
    const { getByText, getByTestId } = render(<Home />)

    act(() => {
      fireEvent.press(getByText(translations.home.changeTheme))
    })

    expect(await getByTestId('current-theme')).toHaveTextContent(
      `${translations.home.currentTheme}: ${translations.home.darkMode}`,
    )
  })
})
