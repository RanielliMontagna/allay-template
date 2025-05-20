import styled from '@emotion/native'

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  padding: ${props => `${props.theme.spacing[4]}px`};
`

export const Title = styled.Text`
  font-size: ${props => `${props.theme.typography.fontSize.xl}px`};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => `${props.theme.spacing[4]}px`};
`

export const ToggleButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  padding: ${props =>
    `${props.theme.spacing[2]}px ${props.theme.spacing[4]}px`};
  border-radius: ${props => `${props.theme.spacing[2]}px`};
`

export const ButtonText = styled.Text`
  color: white;
  font-size: ${props => `${props.theme.typography.fontSize.md}px`};
`
