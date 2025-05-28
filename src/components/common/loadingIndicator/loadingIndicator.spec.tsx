import { render } from '@/shared/utils/jest/jest'
import { LoadingIndicator } from './loadingIndicator'

const mockUseAppStore = jest.fn(() => ({ isLoading: false }))
jest.mock('@/shared/stores/app/app', () => ({
  useAppStore: () => mockUseAppStore(),
}))

describe('LoadingIndicator', () => {
  it('should not render when isLoading is false', () => {
    mockUseAppStore.mockReturnValue({ isLoading: false })
    const { getByTestId } = render(<LoadingIndicator />)
    expect(() => getByTestId('activity-indicator')).toThrow(
      'Unable to find an element with testID: activity-indicator',
    )
  })

  it('should render when isLoading is true', () => {
    mockUseAppStore.mockReturnValue({ isLoading: true })
    const { getByTestId, rerender } = render(<LoadingIndicator />)

    rerender(<LoadingIndicator />)

    expect(getByTestId('activity-indicator')).toBeTruthy()
  })
})
