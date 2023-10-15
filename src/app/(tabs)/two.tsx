import { FlashList } from '@shopify/flash-list';
import { FileEdit, Trash2 } from '@tamagui/lucide-icons';
import { Button, H1, H4, Spinner, Stack, Text, XStack } from 'tamagui';

import { Row } from '@/components/styled/Row';
import { useGetAllUsers } from '@/hooks/example/user/useGetUserInfo';
import { useDeleteUser, useSimulateError } from '@/hooks/example/user/useMutateUserInfo';
import { type UserInfo } from '@/services/example/api.types';
import type { ErrorBoundaryProps } from 'expo-router';

export default function TabTwoScreen() {
  const { data, isLoading } = useGetAllUsers();

  return (
    <Stack flex={1} alignItems="center" justifyContent="center" bg="$background">
      <Stack flex={1} minWidth={400} minHeight={600} mt={'$10'}>
        {/* Note: Always use FlashLists for rendering large sets of data! */}
        {isLoading ? (
          <LoadingState />
        ) : (
          <FlashList data={data} renderItem={({ item }) => <RowItem item={item} />} estimatedItemSize={183} />
        )}
      </Stack>
    </Stack>
  );
}

function RowItem({ item }: { item: UserInfo }) {
  const { mutate, isLoading } = useDeleteUser();
  const { mutate: simulateError, isLoading: isSimulationLoading } = useSimulateError();

  const handleDeleteUser = () => {
    mutate(item.id);
  };

  const handleSimulateError = () => {
    simulateError();
  };

  const isOdd = item.id % 2 === 1;

  return (
    <Row flex={1} alignItems="center" justifyContent="space-between" borderWidth="1" py="$2" px="$4" accent={isOdd}>
      <Text color={isOdd ? '$red10' : '$color'}>{item.name}</Text>
      <XStack>
        <Button chromeless onPress={handleSimulateError}>
          {isSimulationLoading ? <Spinner color="$red10" /> : <FileEdit color={'$red10'} size={'$1'} />}
        </Button>
        <Button chromeless disabled={!isOdd} opacity={!isOdd ? 0.5 : 1} onPress={handleDeleteUser}>
          {isLoading ? <Spinner color="$red10" /> : <Trash2 color={'$red10'} size={'$1'} />}
        </Button>
      </XStack>
    </Row>
  );
}

function LoadingState() {
  return (
    <Stack flex={1} alignItems="center" justifyContent="center">
      <Spinner />
    </Stack>
  );
}

// Example of adding a custom ErrorBoundary screen
export function ErrorBoundary(props: ErrorBoundaryProps) {
  return (
    <Stack flex={1} alignItems="center" justifyContent="center" space={'$4'}>
      <H1 textAlign="center" color="$red8">
        {props.error.message}
      </H1>
      <H4 fontStyle="italic" textDecorationLine="underline" onPress={props.retry}>
        Try Again?
      </H4>
    </Stack>
  );
}
