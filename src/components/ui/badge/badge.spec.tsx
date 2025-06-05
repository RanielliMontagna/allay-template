import { render } from '@/shared/utils/jest/jest'

import { Badge } from './badge'

describe('Badge', () => {
  it('should render correctly with default props', () => {
    const { getByTestId } = render(<Badge />)

    expect(getByTestId('badge-container')).toBeTruthy()
  })

  it('should render with custom color, size, and variant', () => {
    const { getByTestId } = render(
      <Badge color="secondary" size="lg" variant="outline">
        Custom Badge
      </Badge>,
    )

    const badgeContainer = getByTestId('badge-container')
    expect(badgeContainer).toBeTruthy()
    expect(badgeContainer.props.style.backgroundColor).toBe('transparent') // outline variant
  })

  it('should render with children text', () => {
    const { getByText } = render(
      <Badge color="primary" size="md" variant="solid">
        Badge Text
      </Badge>,
    )

    expect(getByText('Badge Text')).toBeTruthy()
  })
})
