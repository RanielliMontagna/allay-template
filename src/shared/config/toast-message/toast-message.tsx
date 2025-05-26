import { useTheme } from '@emotion/react'
import type {
  BaseToastProps,
  ToastConfig,
  ToastConfigParams,
} from 'react-native-toast-message'
import {
  CustomErrorToast,
  CustomInfoToast,
  CustomSuccessToast,
} from './toast-message.styles'

const SuccessToast = (props: ToastConfigParams<BaseToastProps>) => {
  const theme = useTheme()

  return (
    <CustomSuccessToast
      {...props}
      text1Style={{ color: theme.colors.text }}
      text2Style={{ color: theme.colors.gray[600] }}
    />
  )
}

const ErrorToast = (props: ToastConfigParams<BaseToastProps>) => {
  const theme = useTheme()

  return (
    <CustomErrorToast
      {...props}
      text1Style={{ color: theme.colors.text }}
      text2Style={{ color: theme.colors.gray[600] }}
    />
  )
}

const InfoToast = (props: ToastConfigParams<BaseToastProps>) => {
  const theme = useTheme()

  return (
    <CustomInfoToast
      {...props}
      text1Style={{ color: theme.colors.text }}
      text2Style={{ color: theme.colors.gray[600] }}
    />
  )
}

export const toastConfig: ToastConfig = {
  success: props => <SuccessToast {...props} />,
  error: props => <ErrorToast {...props} />,
  info: props => <InfoToast {...props} />,
}
