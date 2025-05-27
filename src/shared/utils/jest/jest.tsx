import { theme } from '@/theme'
import { ThemeProvider } from '@emotion/react'
import { QueryClientProvider } from '@tanstack/react-query'
import {
  type RenderOptions,
  render,
  renderHook,
} from '@testing-library/react-native'
import { I18nextProvider } from 'react-i18next'
import { i18n, initI18n, queryClient } from '@/shared/config'

beforeAll(async () => {
  await initI18n()
  await i18n.changeLanguage('en')
})

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nextProvider i18n={i18n}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  </I18nextProvider>
)

const renderWithProviders = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, {
    wrapper: ({ children }) => <Wrapper>{children}</Wrapper>,
    ...options,
  })

const renderHookWithProviders = <TResult, TProps>(
  hook: (initialProps: TProps) => TResult,
  options?: RenderOptions,
) => renderHook(hook, { wrapper: Wrapper, ...options })

export * from '@testing-library/react-native'
export { renderWithProviders as render, renderHookWithProviders as renderHook }
