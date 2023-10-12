import React from 'react';
import { Anchor, Stack, Text } from 'tamagui';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <Stack space="$1">
      <Stack space="$2" bg="$background" alignItems="center">
        <Text>Open up the code for this screen:</Text>
        <Text p="$2" bg="$backgroundPress">
          {path}
        </Text>

        <Text textAlign="center">Change any of the text, save the file, and your app will automatically update.</Text>
      </Stack>
      <Stack>
        <Anchor py="$4" href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
          <Text textAlign="center" textDecorationLine="underline" fontStyle="italic">
            Tap here if your app doesn&apos;t automatically update after making changes
          </Text>
        </Anchor>
      </Stack>
    </Stack>
  );
}
