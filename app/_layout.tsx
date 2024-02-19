import '../tamagui-web.css'
import { config } from '../tamagui.config'

import { SplashScreen, Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { TamaguiProvider, Theme } from 'tamagui'
import { useFonts } from 'expo-font'
import { createContext, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './components/ThemeContext'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(telas)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

const RootLayoutNav = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const colorScheme = useColorScheme()
  return (
    <ThemeContext.Provider value={{isDarkTheme: isDarkTheme, setIsDarkTheme: setIsDarkTheme}}>
      <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
        <Theme name={isDarkTheme ? "dark" : "light"}>
          <Stack>
            <Stack.Screen name="(telas)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
        </Theme>
      </TamaguiProvider>
    </ThemeContext.Provider>
  )
}

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })


  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError])

  if (!interLoaded && !interError) {
    return null
  }

  return <RootLayoutNav />
}
