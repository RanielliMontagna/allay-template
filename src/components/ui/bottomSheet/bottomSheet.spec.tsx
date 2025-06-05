import type { BottomSheetModal } from '@gorhom/bottom-sheet'
import { createRef, useRef } from 'react'

import { render, waitFor } from '@/shared/utils/jest/jest'

import { Text } from '../text/text'
import { BottomSheet } from './bottomSheet'

describe('BottomSheet', () => {
  it('should render the BottomSheet component', () => {
    const changeLanguageBottomSheetRef = createRef<BottomSheetModal>()

    const { getByTestId } = render(
      <BottomSheet ref={changeLanguageBottomSheetRef} snapPoints={['30%']}>
        <Text>Test Content</Text>
      </BottomSheet>,
    )

    waitFor(() => {
      expect(getByTestId('bottomSheet')).toBeTruthy()
      expect(getByTestId('bottomSheet').children[0].props.children).toBe(
        'Test Content',
      )
    })
  })
})
