import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { H2, Separator, Stack } from 'tamagui';

import EditScreenInfo from '@/components/EditScreenInfo';

export default function ModalScreen() {
  return (
    <Stack flex={1} alignItems="center" justifyContent="center">
      <H2 fontWeight={'bold'}>Modal</H2>
      <Separator alignSelf="center" my="$3" w="80%" />
      <EditScreenInfo path="app/modal.tsx" />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </Stack>
  );
}
