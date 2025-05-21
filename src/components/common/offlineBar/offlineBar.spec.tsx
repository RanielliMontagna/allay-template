import React from 'react'

import { OfflineBar } from '@/components'
import { render } from '@/shared/utils/jest'

jest.mock('@/shared/stores', () => ({
  useAppStore: jest.fn(),
}))

const useAppStoreMock = require('@/shared/stores').useAppStore

describe('OfflineBar', () => {
  afterEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('should be able to render', () => {
    useAppStoreMock.mockReturnValue({
      isConnected: false,
      setIsConnected: jest.fn(),
    })

    const { getByTestId } = render(<OfflineBar />)
    expect(getByTestId('offline-bar')).toBeDefined()
  })

  it('should not render in production', () => {
    process.env.NODE_ENV = 'production'

    useAppStoreMock.mockReturnValue({
      isConnected: false,
      setIsConnected: jest.fn(),
    })

    const { queryByTestId } = render(<OfflineBar />)
    expect(queryByTestId('offline-bar')).toBeNull()
  })

  it('should not render when connected', () => {
    process.env.NODE_ENV = 'development'

    useAppStoreMock.mockReturnValue({
      isConnected: true,
      setIsConnected: jest.fn(),
    })

    const { queryByTestId } = render(<OfflineBar />)
    expect(queryByTestId('offline-bar')).toBeNull()
  })
})
