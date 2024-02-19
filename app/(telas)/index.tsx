import { Input, View, XStack, YStack } from 'tamagui'
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
        <XStack gap="$2" mt="$4">
          <Input f={1} size="$5" placeholder='buscar...' focusStyle={{
            borderWidth: 2,
            borderColor: "$blue10"
          }}/>
          <Link href='/modal' asChild >
            <Button background="outline" size="$5" />
          </Link>
        </XStack>
      </YStack>
    </View>
  )
}
