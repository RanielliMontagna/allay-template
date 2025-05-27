import type { StyleProp, ViewStyle } from 'react-native'

type BadgeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error'
type BadgeVariant = 'solid' | 'outline'
type BadgeSize = 'sm' | 'md' | 'lg'

export interface BadgeProps extends React.PropsWithChildren {
  /**
   * The variant of the badge.
   * Determines the visual style of the badge.
   * @type {string}
   * @default 'primary'
   */
  color?: BadgeColor

  /**
   * The size of the badge.
   * Can be used to adjust the padding and font size.
   * @type {'sm' | 'md' | 'lg'}
   * @default 'sm'
   */
  size?: BadgeSize

  /**
   * The variant of the badge.
   * Determines the visual style of the badge, such as solid or outline.
   * @type {BadgeVariant}
   * @default 'solid'
   */
  variant?: BadgeVariant

  /**
   * Additional styles for the badge.
   * Can be used to override default styles or add custom styles.
   */
  style?: StyleProp<ViewStyle>
}

export interface BadgeStylesProps {
  color: BadgeColor
  size: BadgeSize
  variant: BadgeVariant
}
