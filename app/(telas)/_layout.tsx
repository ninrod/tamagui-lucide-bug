import { ActivitySquare, CircleDollarSign, Wrench } from '@tamagui/lucide-icons'
import { Link, Tabs } from 'expo-router'
import { Pressable } from 'react-native'
import { Text } from 'tamagui'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'red',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Tab One, esse tem cor',
          tabBarIcon: ({ color }) => (
            <ActivitySquare />
            // < Text>Hello tab two!</Text>
          ),
          headerRight: () => (
            <Link href='/modal' asChild>
              <Pressable>
                <Wrench></Wrench>
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Tab Two, esse tem cor',
          tabBarIcon: ({ color }) => (
            <CircleDollarSign />
            // <Text>Hello tab two!</Text>
          ),
        }}
      />
    </Tabs>
  )
}
