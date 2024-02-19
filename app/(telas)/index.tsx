import { View, XStack, YStack } from 'tamagui'
import { User } from '../components/User'
import { ChangeTheme } from '../components/ChangeTheme'
import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import { Button } from '../components/Button';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  const context = useContext(ThemeContext);
  return (
    <View flex={1} bg="$background" >
      <YStack p="$6" gap="$4">
        <XStack jc="space-between" ai="center" >
          <User />
          <ChangeTheme onCheckedChange={context.setIsDarkTheme}/>
        </XStack>
        <Link href='/modal' asChild >
          <Button background="outline" />
        </Link>
      </YStack>
    </View>
  )
}
