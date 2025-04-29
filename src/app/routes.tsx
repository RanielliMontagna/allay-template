import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/modules/home'

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: { headerShown: false },
  screens: {
    Home,
  },
})

export const Navigation = createStaticNavigation(RootStack)
