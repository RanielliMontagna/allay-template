import { render } from '@/shared/utils/jest'

import { Button } from './button'
import { Text } from '../text/text'
import { theme } from '@/theme'

describe('Button', () => {
  it('should render the button with default props', () => {
    const { getByText } = render(<Button>Click Me</Button>)

    expect(getByText('Click Me')).toBeTruthy()
  })

  it('should render the button with loading state', () => {
    const { getByTestId } = render(<Button isLoading>Click Me</Button>)

    expect(getByTestId('loading-overlay')).toBeTruthy()
  })

  it('should render the button with start adornment', () => {
    const { getByText } = render(
      <Button startAdornment={<Text>Icon</Text>}>Click Me</Button>,
    )

    expect(getByText('Icon')).toBeTruthy()
  })
})
