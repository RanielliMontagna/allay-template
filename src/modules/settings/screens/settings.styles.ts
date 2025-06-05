import styled from '@emotion/native'
import Animated from 'react-native-reanimated'

export const SettingsContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  padding: ${({ theme }) => theme.spacing[4]};

  gap: ${({ theme }) => theme.spacing[2]};
`

export const PreferenceContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const PreferenceDescriptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`

export const IconContainer = styled(Animated.View)`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.gray[200]};

  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.radius.md};
`

export const PreferenceOptionContainer = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`
