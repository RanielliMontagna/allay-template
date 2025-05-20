import { type UseQueryOptions, useQuery } from '@tanstack/react-query'

export const useCustomQuery = <T>(options: UseQueryOptions<T>) => {
  return useQuery<T>({
    gcTime: Number.POSITIVE_INFINITY, // Disable garbage collection by default
    staleTime: 0, // Disable stale time (always fetch) by default
    retry: 2, // Retry twice by default
    refetchOnMount: 'always',
    refetchOnWindowFocus: 'always',
    refetchOnReconnect: 'always',
    ...options,
  })
}
