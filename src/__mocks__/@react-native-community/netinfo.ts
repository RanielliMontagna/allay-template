let currentCallback: ((state: { isConnected: boolean }) => void) | null = null

const NetInfoMock = {
  addEventListener: jest.fn(callback => {
    currentCallback = callback
    callback({ isConnected: true })

    return jest.fn(() => {
      currentCallback = null
    })
  }),

  // Method to simulate a connection change
  __simulateConnectionChange: (isConnected: boolean) => {
    currentCallback?.({ isConnected })
  },
}

export default NetInfoMock
