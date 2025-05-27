import styled from '@emotion/native'
import Animated from 'react-native-reanimated'

export const ScreenHeaderContainer = styled(Animated.View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    width: 100%;
    height: ${({ theme }) => theme.spacing[14]};
    border-bottom-width: 1px;
    gap: ${({ theme }) => theme.spacing[1]};
    padding: 0 ${({ theme }) => theme.spacing[4]};
    background-color: ${({ theme }) => theme.colors.background};

    

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.gray[200]};
`

export const BackButton = styled.TouchableOpacity`
    padding: ${({ theme }) => theme.spacing[1]};
    border-radius: ${({ theme }) => theme.radius.md};
`
