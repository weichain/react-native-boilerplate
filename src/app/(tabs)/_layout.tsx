import { Code2, Info } from '@tamagui/lucide-icons';
import { Link, Stack, Tabs } from 'expo-router';
import { useCallback } from 'react';
import { Button, View, useTheme } from 'tamagui';

import { useToggleStorybook } from '@/hooks/useToggleStorybook';

export default function TabLayout() {
  const tintColor = useTheme().blue8.val;
  // Note: This logic needs to be wherever the initial route is. In this case its the (tabs) layout.
  const { isStorybookEnabled } = useToggleStorybook();

  const renderStorybook = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const StorybookUI = require('../../../.storybook').default;

    return (
      <View flex={1}>
        <Stack.Screen />
        <StorybookUI />
      </View>
    );
  }, [isStorybookEnabled]);

  return isStorybookEnabled ? (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tintColor,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <Code2 size="$2" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Button icon={<Info size="$1" />} bg={'#fff'}></Button>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <Code2 size="$2" color={color} />,
        }}
      />
    </Tabs>
  ) : (
    renderStorybook()
  );
}
