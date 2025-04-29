import { render } from '@testing-library/react-native'

import { App } from '../app'

describe('App', () => {
  it('should render the app', () => {
    const { getByText } = render(<App />)

    expect(getByText('Home!')).toBeTruthy()
  })
})
