import { spacing } from '@/theme/spacing'
import type { ButtonSize } from './button.types'

export const getButtonPadding = (size: ButtonSize) => {
  const { vertical, horizontal } = {
    sm: { vertical: spacing[2], horizontal: spacing[3] },
    md: { vertical: spacing[3], horizontal: spacing[4] },
    lg: { vertical: spacing[4], horizontal: spacing[6] },
  }[size]

  return {
    paddingTop: vertical,
    paddingBottom: vertical,
    paddingLeft: horizontal,
    paddingRight: horizontal,
  }
}
