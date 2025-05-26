import { render } from '@/shared/utils/jest'

import { Text } from './text'

describe('Text', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Text>Default Text</Text>)
    expect(getByText('Default Text')).toBeTruthy()
  })

  it('applies custom styles', () => {
    const { getByText } = render(
      <Text style={{ color: 'red' }}>Styled Text</Text>,
    )
    const textElement = getByText('Styled Text')
    expect(textElement.props.style.color).toBe('red')
  })

  it('accepts custom size, weight, line height, and color', () => {
    const { getByText } = render(
      <Text size="lg" weight="bold" lh="xl" color="primary">
        Custom Styled Text
      </Text>,
    )
    const textElement = getByText('Custom Styled Text')
    expect(textElement.props.size).toBe('lg')
    expect(textElement.props.weight).toBe('bold')
    expect(textElement.props.lh).toBe('xl')
    expect(textElement.props.color).toBe('primary')
  })

  it('renders with gray color', () => {
    const { getByText } = render(<Text color="gray.500">Gray Text</Text>)
    const textElement = getByText('Gray Text')
    expect(textElement.props.color).toBe('gray.500')
  })
})
