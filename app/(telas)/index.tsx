import { View, XStack, YStack } from 'tamagui'
import { User } from '../components/User'
import { ChangeTheme } from '../components/ChangeTheme'

export default function TabOneScreen() {
  return (
    <View flex={1} bg="$background" >
      <YStack p="$6">
        <XStack jc="space-between" ai="center" >
          <User />
          <ChangeTheme />
        </XStack>
      </YStack>
    </View>
  )
}
