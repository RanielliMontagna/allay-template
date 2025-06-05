import { i18n, initI18n, queryClient } from '@/shared/config'
import { theme } from '@/theme'
import { ThemeProvider } from '@emotion/react'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { QueryClientProvider } from '@tanstack/react-query'
import {
  type RenderOptions,
  render,
  renderHook,
} from '@testing-library/react-native'
import { I18nextProvider } from 'react-i18next'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

beforeAll(async () => {
  await initI18n()
  await i18n.changeLanguage('en')
})

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <SafeAreaProvider>
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GestureHandlerRootView>
            <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
          </GestureHandlerRootView>
        </ThemeProvider>
      </QueryClientProvider>
    </I18nextProvider>
  </SafeAreaProvider>
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
