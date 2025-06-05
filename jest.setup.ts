import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'
import { setUpTests } from 'react-native-reanimated'

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}))

// Mock Sentry
jest.mock('@sentry/react-native')

// Mock safe area context
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext)

// Mock react-native-reanimated
setUpTests()

// Mock @expo/vector-icons to avoid issues with native modules
jest.mock('@expo/vector-icons', () => {
  const React = require('react')
  return {
    Ionicons: (props: Record<string, unknown>) =>
      React.createElement('Icon', props),
  }
})

jest.mock('@gorhom/bottom-sheet', () => {
  const React = require('react')
  const { View } = require('react-native')

  const BottomSheet = React.forwardRef(
    // biome-ignore lint/suspicious/noExplicitAny: The ref receives any type
    (props: Record<string, unknown>, ref: React.Ref<any>) => {
      return React.createElement(View, { ref }, props.children)
    },
  )

  const BottomSheetBackdrop = () => null
  const BottomSheetModalProvider = ({
    children,
  }: { children: React.ReactNode }) => React.createElement(View, null, children)

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const BottomSheetModal = React.forwardRef((props: any, ref: any) => {
    React.useImperativeHandle(ref, () => ({
      present: () => {}, // mocka o método present
      // adicione outros métodos se necessário
    }))
    return React.createElement(View, { ref }, props.children)
  })
  const BottomSheetView = React.forwardRef(
    // biome-ignore lint/suspicious/noExplicitAny: The ref receives any type
    (props: Record<string, unknown>, ref: React.Ref<any>) => {
      return React.createElement(View, { ref }, props.children)
    },
  )

  return {
    __esModule: true,
    default: BottomSheet,
    BottomSheetBackdrop,
    BottomSheetModalProvider,
    BottomSheetModal,
    BottomSheetView,
  }
})
