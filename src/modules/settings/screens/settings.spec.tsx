import { act, fireEvent, render } from '@/shared/utils/jest'

import translations from '@/locales/en-US'
import { Settings } from './settings'

describe('Settings', () => {
  it('should render the settings screen', () => {
    const { getByText } = render(<Settings />)

    expect(getByText(translations.settings.title)).toBeTruthy()
    expect(getByText(translations.settings.description)).toBeTruthy()
  })
})
