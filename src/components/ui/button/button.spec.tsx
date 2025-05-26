import { render } from '@/shared/utils/jest'

import { theme } from '@/theme'
import { Text } from '../text/text'
import { Button } from './button'

describe('Button', () => {
  it('should render the button with default props', () => {
    const { getByText } = render(<Button>Click Me</Button>)

    expect(getByText('Click Me')).toBeTruthy()
  })

  it('should render the button with loading state', () => {
    const { getByTestId } = render(
      <Button isLoading startAdornment={<Text>Icon</Text>}>
        Click Me
      </Button>,
    )

    expect(getByTestId('loading-overlay')).toBeTruthy()
  })

  it('should render the large button with loading state', () => {
    const { getByTestId } = render(
      <Button size="lg" isLoading startAdornment={<Text>Icon</Text>}>
        Click Me
      </Button>,
    )
    expect(getByTestId('loading-overlay')).toBeTruthy()
  })

  it('should render the button with start adornment', () => {
    const { getByText } = render(
      <Button startAdornment={<Text>Icon</Text>}>Click Me</Button>,
    )

    expect(getByText('Icon')).toBeTruthy()
  })

  it('should render the button variant ghost', () => {
    const { getByText } = render(<Button variant="ghost">Click Me</Button>)

    expect(getByText('Click Me')).toBeTruthy()
  })

  it('should render with three sizes: sm, md, lg', () => {
    const { getByText } = render(
      <>
        <Button size="sm">Small Button</Button>
        <Button size="md">Medium Button</Button>
        <Button size="lg">Large Button</Button>
      </>,
    )

    expect(getByText('Small Button')).toBeTruthy()
    expect(getByText('Medium Button')).toBeTruthy()
    expect(getByText('Large Button')).toBeTruthy()
  })

  it('should apply full width style when fullWidth prop is true', () => {
    const { getByText } = render(<Button fullWidth>Full Width Button</Button>)

    expect(getByText('Full Width Button')).toBeTruthy()
  })

  it('should apply disabled style when isDisabled prop is true', () => {
    const { getByText } = render(<Button isDisabled>Disabled Button</Button>)

    const button = getByText('Disabled Button')
    expect(button).toBeTruthy()
  })

  it('should apply outline style when variant is outline', () => {
    const { getByText } = render(
      <Button variant="outline">Outline Button</Button>,
    )

    const button = getByText('Outline Button')
    expect(button).toBeTruthy()
  })
})
