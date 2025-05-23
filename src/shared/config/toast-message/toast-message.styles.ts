import styled from '@emotion/native'

import { BaseToast, ErrorToast } from 'react-native-toast-message'

export const CustomSuccessToast = styled(BaseToast)`
  border-left-color: ${props => props.theme.colors.success};
  background-color: ${props => props.theme.colors.gray[100]};
`

export const CustomErrorToast = styled(ErrorToast)`
  border-left-color: ${props => props.theme.colors.error};
  background-color: ${props => props.theme.colors.gray[100]};
`

export const CustomInfoToast = styled(BaseToast)`
  border-left-color: ${props => props.theme.colors.info};
  background-color: ${props => props.theme.colors.gray[100]};
`
