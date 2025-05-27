import type { StyleProp, ViewStyle } from 'react-native'

export type AvatarSize = 'sm' | 'md' | 'lg'
export type AvatarShape = 'circle' | 'square'

export interface AvatarProps {
  /**
   * The source of the avatar image.
   * This should be a valid image URL or a local image reference.
   *
   * @example
   * 'https://example.com/avatar.jpg'
   */
  source?: string

  /**
   * The fallback source if the main image fails to load.
   * Initials of the text can be used as a fallback.
   * @example
   * 'John Doe'
   * This will display "JD" as initials if the image fails to load.
   */
  fallbackSource?: string

  /**
   * The size of the avatar.
   * @default 'medium'
   */
  size?: AvatarSize

  /**
   * The shape of the avatar.
   * @default 'circle'
   */
  shape?: AvatarShape

  /**
   * Additional styles for the avatar.
   */
  style?: StyleProp<ViewStyle>
}

export type StyledAvatarContainerProps = Omit<
  AvatarProps,
  'size' | 'shape' | 'source'
> & {
  size: AvatarSize
  shape: AvatarShape
}

export type StyledAvatarFallbackTextProps = Pick<AvatarProps, 'size'> & {}
