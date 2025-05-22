import styled from '@emotion/native'
import Animated from 'react-native-reanimated'

export const OfflineBarContainer = styled(Animated.View)`
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.spacing[2]};
    background-color: ${({ theme }) => theme.colors.info};
`

export const OfflineBarText = styled.Text`
    color: ${({ theme }) => theme.colors.background};
`
