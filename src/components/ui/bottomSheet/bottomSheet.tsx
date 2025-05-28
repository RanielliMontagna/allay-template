import React, { useCallback } from 'react'

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  type BottomSheetBackdropProps,
  type BottomSheetModalProps,
} from '@gorhom/bottom-sheet'
import { useTheme } from '@/hooks'

const BottomSheetComponent = React.forwardRef<
  React.ElementRef<typeof BottomSheetModal>,
  BottomSheetModalProps
>(({ children, snapPoints, ...rest }, ref) => {
  const { theme } = useTheme()

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} appearsOnIndex={1} />
    ),
    [],
  )

  return (
    <BottomSheetModal
      ref={ref}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints || ['30%']}
      index={1}
      enableContentPanningGesture={false}
      backgroundStyle={{
        backgroundColor: theme.colors.background,
      }}
      handleStyle={{
        borderTopWidth: 1,
        borderColor: theme.colors.gray[50],

        backgroundColor: theme.colors.background,
        borderTopRightRadius: theme.radius.lg,
        borderTopLeftRadius: theme.radius.lg,
      }}
      handleIndicatorStyle={{ backgroundColor: theme.colors.gray[400] }}
      {...rest}
    >
      <BottomSheetView testID="bottomSheet">
        {children as React.ReactElement}
      </BottomSheetView>
    </BottomSheetModal>
  )
})

BottomSheetComponent.displayName = 'BottomSheet'

export { BottomSheetComponent as BottomSheet }
