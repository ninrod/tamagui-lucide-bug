import { View, XStack, YStack } from 'tamagui'
import { User } from '../components/User'
import { ChangeTheme } from '../components/ChangeTheme'
import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';

export default function TabOneScreen() {
  const context = useContext(ThemeContext);
  return (
    <View flex={1} bg="$background" >
      <YStack p="$6">
        <XStack jc="space-between" ai="center" >
          <User />
          <ChangeTheme onCheckedChange={context.setIsDarkTheme}/>
        </XStack>
      </YStack>
    </View>
  )
}
