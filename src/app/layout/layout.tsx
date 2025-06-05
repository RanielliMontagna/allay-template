import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import type { ParamListBase, RouteProp } from '@react-navigation/native'

import { ScreenHeader } from '@/components'

import { useTranslation } from 'react-i18next'
import { Content, LayoutContainer } from './layout.styles'

interface TabLayoutProps
  extends React.PropsWithChildren<{
    route: RouteProp<ParamListBase, string>
    navigation: BottomTabNavigationProp<ParamListBase, string>
  }> {}

export default function TabLayout({
  children,
  route,
  navigation,
}: TabLayoutProps) {
  const { t } = useTranslation()

  return (
    <LayoutContainer>
      <ScreenHeader
        title={t(`${route.name.toLocaleLowerCase()}.title`)}
        handleBack={
          navigation.canGoBack() ? () => navigation.goBack() : undefined
        }
      />
      <Content>{children}</Content>
    </LayoutContainer>
  )
}
