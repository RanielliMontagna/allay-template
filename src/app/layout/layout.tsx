import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import type { ParamListBase, RouteProp } from '@react-navigation/native'

import { ScreenHeader } from '@/components'

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
  return (
    <LayoutContainer>
      <ScreenHeader title={route.name} handleBack={navigation.canGoBack() ? () => navigation.goBack() : undefined} />
      <Content>{children}</Content>
    </LayoutContainer>
  )
}
