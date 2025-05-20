import { theme } from '@/theme'
import { ThemeProvider } from '@emotion/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { type RenderOptions, render } from '@testing-library/react-native'
import { queryClient } from '../config'

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </QueryClientProvider>
)

const renderWithProviders = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, {
    wrapper: ({ children }) => <Wrapper>{children}</Wrapper>,
    ...options,
  })

export * from '@testing-library/react-native'
export { renderWithProviders as render }
