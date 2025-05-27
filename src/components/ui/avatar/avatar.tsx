import { Image } from 'react-native'

import { AvatarContainer, AvatarFallbackText } from './avatar.styles'
import type { AvatarProps } from './avatar.types'
import { getInitials } from '@/shared/utils'

export const Avatar: React.FC<AvatarProps> = ({
  source,
  fallbackSource,
  size = 'md',
  shape = 'circle',
  style,
}) => {
  const avatarSize = size === 'sm' ? 40 : size === 'md' ? 60 : 80
  const showImage = !!source

  return (
    <AvatarContainer
      size={size}
      shape={shape}
      style={style}
      testID="avatar-container"
    >
      {showImage ? (
        <Image
          source={{ uri: source }}
          style={{ width: avatarSize, height: avatarSize }}
        />
      ) : (
        <AvatarFallbackText size={size}>
          {fallbackSource ? getInitials(fallbackSource) : ''}
        </AvatarFallbackText>
      )}
    </AvatarContainer>
  )
}
