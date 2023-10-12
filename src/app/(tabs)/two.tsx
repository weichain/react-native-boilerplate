import { FlashList } from '@shopify/flash-list';
import { Spinner, Stack, Text, XStack } from 'tamagui';

import { useGetAllUsers } from '@/hooks/user/useGetUserInfo';
import { type UserInfo } from '@/services/api.types';

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
  return (
    <XStack flex={1} alignItems="center" justifyContent="center" my="$4">
      <Text>Hello {item.name}</Text>
    </XStack>
  );
}

function LoadingState() {
  return (
    <Stack flex={1} alignItems="center" justifyContent="center">
      <Spinner />
    </Stack>
  );
}
