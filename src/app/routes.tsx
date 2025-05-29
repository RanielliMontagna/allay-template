import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Ionicons } from '@expo/vector-icons'

import { useTheme } from '@/hooks'
import { Home } from '@/modules/home'
import { Settings } from '@/modules/settings'
import { capitalize } from '@/shared/utils'
import { useTranslation } from 'react-i18next'
import TabLayout from './layout/layout'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const routes = {
  Home: {
    name: 'Home',
    focused: 'home',
    unfocused: 'home-outline',
  },
  Settings: {
    name: 'Settings',
    focused: 'settings',
    unfocused: 'settings-outline',
  },
} as const

function BottomTabs() {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = routes[route.name as keyof typeof routes].focused
          const iconNameUnfocused =
            routes[route.name as keyof typeof routes].unfocused

          return (
            <Ionicons
              name={focused ? iconName : iconNameUnfocused}
              size={size}
              color={color}
            />
          )
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.gray[300],
        },
      })}
    >
      <Tab.Screen
        key={routes.Home.name}
        name="Home"
        options={{ tabBarLabel: capitalize(t('home.title')) }}
        component={Home}
        layout={TabLayout}
      />
      <Tab.Screen
        key={routes.Settings.name}
        name="Settings"
        options={{ tabBarLabel: capitalize(t('settings.title')) }}
        component={Settings}
        layout={TabLayout}
      />
    </Tab.Navigator>
  )
}

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
