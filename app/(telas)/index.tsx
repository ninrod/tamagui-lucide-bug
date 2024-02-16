import { Text, View, YStack} from 'tamagui'
import { User } from '../components/User'
import { ChangeTheme } from '../components/ChangeTheme'

export default function TabOneScreen() {
  return (
    <View flex={1} alignItems="flex-start" bg="$background" >
      <YStack p="$6">
        <User/>
        <ChangeTheme/>
      </YStack>
    </View>
  )
}
