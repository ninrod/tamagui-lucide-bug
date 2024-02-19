import { Switch, XStack, SwitchProps} from "tamagui";
import { Moon, Sun } from "@tamagui/lucide-icons"

export function ChangeTheme({...rest}: SwitchProps) {
    return ( 
        <XStack gap="$2" ai="center">
            <Sun size={"$2"}/>
            <Switch size="$3" {...rest}>
                <Switch.Thumb animation={"bouncy"}/>
            </Switch>
            <Moon size={"$2"}/>
        </XStack>
    )
}