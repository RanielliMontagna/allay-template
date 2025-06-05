import { render } from '@/shared/utils/jest/jest'

import translations from '@/locales/en-US'
import { Home } from './home'

describe('Home', () => {
  it('should render the home screen', () => {
    const { getByText } = render(<Home />)

    expect(getByText(translations.home.title)).toBeTruthy()
  })
})
