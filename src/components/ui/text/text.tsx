import type { CustomTextProps } from './text.types'

import { StyledText } from './text.styles'

type TextProps = Partial<CustomTextProps>

export const Text: React.FC<TextProps> = ({
  size = 'md',
  weight = 'regular',
  lh = 'md',
  color = 'text',
  style,
  children,
  ...rest
}) => {
  return (
    <StyledText
      style={style}
      size={size}
      weight={weight}
      lh={lh}
      color={color}
      {...rest}
    >
      {children}
    </StyledText>
  )
}
