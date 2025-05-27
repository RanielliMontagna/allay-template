import { render } from '@/shared/utils/jest/jest'

import { Avatar } from './avatar'

describe('Avatar', () => {
  it('should render the avatar with default props', () => {
    const { getByTestId } = render(<Avatar />)

    expect(getByTestId('avatar-container')).toBeTruthy()
  })

  it('should render the avatar sm, md, and lg sizes and with fallbackSource', () => {
    const { getByTestId, getByText } = render(
      <>
        <Avatar size="sm" fallbackSource="Small Avatar" />
        <Avatar size="md" fallbackSource="Medium Avatar" />
        <Avatar size="lg" fallbackSource="Large Avatar" />
      </>,
    )

    expect(getByText('SA')).toBeTruthy()
    expect(getByText('MA')).toBeTruthy()
    expect(getByText('LA')).toBeTruthy()
  })

  it('should render the avatar with source and square shape', () => {
    const { getByTestId } = render(
      <Avatar
        source="https://example.com/avatar.jpg"
        shape="square"
        size="md"
      />,
    )

    expect(getByTestId('avatar-container')).toBeTruthy()
  })
})
