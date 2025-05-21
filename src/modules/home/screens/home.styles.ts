import styled from '@emotion/native'

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing[4]};
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

export const ToggleButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.md};
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
`
