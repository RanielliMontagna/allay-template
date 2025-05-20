import { render } from '@/shared/utils/jest'
import { LoadingIndicator } from './loadingIndicator'

// Mock useAppStore para controlar o isLoading
const mockUseAppStore = jest.fn()
jest.mock('@/shared/stores/app', () => ({
  useAppStore: () => mockUseAppStore(),
}))

describe('LoadingIndicator', () => {
  it('não renderiza nada quando isLoading é false', () => {
    mockUseAppStore.mockReturnValue({ isLoading: false })
    const { toJSON } = render(<LoadingIndicator />)
    expect(toJSON()).toBeNull()
  })

  it('renderiza ActivityIndicator quando isLoading é true', () => {
    mockUseAppStore.mockReturnValue({ isLoading: true })
    const { getByTestId } = render(<LoadingIndicator />)
    expect(getByTestId('ActivityIndicator')).toBeTruthy()
  })
})
