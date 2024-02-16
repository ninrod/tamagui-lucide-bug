import { Avatar, H4, Text, XStack, YStack } from "tamagui";

export function User() {
    return (
        <XStack gap="$2" ai='center'>
            <Avatar circular size="$6">
                <Avatar.Image src="https://github.com/ninrod.png" />
                <Avatar.Fallback backgroundColor="$blue10"/>
            </Avatar>
            <YStack>
                <Text color="$gray10">
                    Olá
                </Text>
                <H4 mt="$-2" fontWeight='900'>
                    Filipe
                </H4>
            </YStack>
        </XStack>
    )
}