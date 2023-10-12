import { Code2, Info } from '@tamagui/lucide-icons';
import { Link, Tabs } from 'expo-router';
import { Button, useTheme } from 'tamagui';

export default function TabLayout() {
  const tintColor = useTheme().blue8.val;

  return (
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
  );
}
