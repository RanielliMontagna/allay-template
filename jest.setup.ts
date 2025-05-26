import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'
import {setUpTests} from 'react-native-reanimated'

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