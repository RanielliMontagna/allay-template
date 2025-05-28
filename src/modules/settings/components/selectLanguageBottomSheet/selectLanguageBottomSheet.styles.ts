import styled from '@emotion/native'
import Animated from 'react-native-reanimated'

export const BottomSheetContainer = styled(Animated.View)`
    display: flex;
    align-items: center;   

    padding: ${({ theme }) => theme.spacing[4]};
    gap: ${({ theme }) => theme.spacing[2]};
`

export const LanguageHeaderContainer = styled(Animated.View)`
    display: flex;
    align-items: center;
`

export const LanguageIconContainer = styled(Animated.View)`
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.gray[200]};
    width: 48px;
    height: 48px;
    border-radius: ${({ theme }) => theme.radius.full};
`

export const LanguageOptionContainer = styled.TouchableOpacity<{
  isSelected: boolean
}>`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: ${({ theme }) => theme.spacing[3]};

    background-color: ${({ theme }) => theme.colors.gray[50]};
    
    border-color: ${({ theme, isSelected }) => (isSelected ? theme.colors.primary : theme.colors.gray[200])};
    border-width: 1px;
    border-radius: ${({ theme }) => theme.radius.md};
`
