import { render } from '@/shared/utils/jest'
import { App } from '../app'

describe('App', () => {
  it('should render the app', () => {
    const { getByText } = render(<App />)

    expect(getByText('Toggle Theme')).toBeTruthy()
  })
})
