import { Link, Tabs } from 'expo-router'
import { Pressable } from 'react-native'
import { Text } from 'tamagui'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Tab One, esse tem cor',
          tabBarIcon: ({ color }) => <Text>Hello tab one!</Text>,
          headerRight: () => (
            <Link href='/modal' asChild>
              <Pressable>
                <Text>Hello!</Text>
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Tab Two, esse tem cor',
          tabBarIcon: ({ color }) => <Text>Hello tab two!</Text>,
        }}
      />
    </Tabs>
  )
}
