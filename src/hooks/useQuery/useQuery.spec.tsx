import { renderHook } from '@/shared/utils/jest'
import { useCustomQuery } from './useQuery'

describe('useQuery', () => {
  it('should be able to render  the hook', () => {
    const { result } = renderHook(() =>
      useCustomQuery({
        queryKey: ['test'],
        queryFn: () => Promise.resolve('test'),
      }),
    )

    expect(result.current).toBeTruthy()
  })
})
