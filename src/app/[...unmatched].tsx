import { Link, Stack } from 'expo-router';
import { H2, Text, XStack, YStack } from 'tamagui';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <YStack flex={1} alignItems="center" justifyContent="center" p="$5">
        <H2>This screen doesn&apos;t exist.</H2>
        <XStack mt="$4" py="$4">
          <Link href="/">
            <Text textDecorationLine="underline" fontStyle="italic">
              Go to home screen!
            </Text>
          </Link>
        </XStack>
      </YStack>
    </>
  );
}
