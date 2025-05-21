import styled from '@emotion/native'

export const OfflineBarContainer = styled.View`
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.spacing[2]};
    background-color: ${({ theme }) => theme.colors.info};
`

export const OfflineBarText = styled.Text`
    color: ${({ theme }) => theme.colors.background};
`
