import { BadgeContainer, BadgeText } from './badge.styles'
import type { BadgeProps } from './badge.types'

export function Badge({
  children,
  color = 'primary',
  size = 'sm',
  variant = 'solid',
  style,
}: BadgeProps) {
  return (
    <BadgeContainer
      color={color}
      variant={variant}
      size={size}
      style={style}
      testID="badge-container"
    >
      <BadgeText color={color} variant={variant} size={size}>
        {children}
      </BadgeText>
    </BadgeContainer>
  )
}
