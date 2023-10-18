import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Button, H2, Separator, Spinner, Stack, Switch, Text } from 'tamagui';

import EditScreenInfo from '@/components/EditScreenInfo';
import { usePreferencesStore } from '@/context/example/userPreferencesStore';
import { useGetUserByID } from '@/hooks/example/user/useGetUserInfo';

export default function TabOneScreen() {
  const { reset } = useQueryErrorResetBoundary();
  // Note: Example of using zustand for changing theme preferences
  const { isDarkThemed, toggleTheme } = usePreferencesStore((state) => ({ ...state }));

  return (
    <Stack flex={1} alignItems="center" justifyContent="center" bg={'$background'}>
      <Switch
        size="$2"
        checked={isDarkThemed}
        onCheckedChange={() => {
          toggleTheme();
        }}
        backgroundColor={'$blue8'}
        position="absolute"
        top={'$4'}
        right={'$2'}
      >
        <Switch.Thumb animation="bouncy" />
      </Switch>
      <H2>Tab One</H2>
      <Separator alignSelf="center" my="$3" w="80%" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary onReset={reset} fallback={<FallbackMessage />}>
          <WelcomeMessage />
        </ErrorBoundary>
      </Suspense>
      {/* Note: Example of how easy it is to apply animations */}
      <Button bg="$blue10" mt="$4" pressStyle={{ bg: '$blue9', scale: 1.2 }} color={'$blue2'} animation={'bouncy'}>
        Press me!
      </Button>
    </Stack>
  );
}

// Note: Example of handling errors on a more local level
const WelcomeMessage = () => {
  // Note: Example of handling data fetching
  // change param to >10 to go into error case
  const { data } = useGetUserByID(1);

  return <Text>Welcome from {data.name}</Text>;
};

const FallbackMessage = () => <Text>Something went wrong</Text>;
