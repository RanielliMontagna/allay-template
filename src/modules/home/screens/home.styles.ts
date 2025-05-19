import styled from '@emotion/native'

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing[4]}px;
`

export const Title = styled.Text`
  font-size: ${props => props.theme.typography.fontSize['2xl']}px;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing[4]}px;
`

export const ToggleButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing[3]}px
    ${props => props.theme.spacing[6]}px;
  border-radius: ${props => props.theme.radius.md}px;
`

export const ButtonText = styled.Text`
  color: white;
  font-size: ${props => props.theme.typography.fontSize.md}px;
`
