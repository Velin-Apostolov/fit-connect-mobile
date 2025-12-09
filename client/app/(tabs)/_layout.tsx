// client/app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
// import { AntDesign } from '@expo/vector-icons'; // Example icon library

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#4F46E5' }}> {/* Example: using a shade of indigo */}
            <Tabs.Screen
                name="index" // Matches app/(tabs)/index.tsx (This is your Home/Dashboard)
                options={{
                    title: 'Dashboard',
                    // tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={24} />, 
                }}
            />
            {/* Add more tabs here, e.g., 'Trainer Search', 'Profile' */}
        </Tabs>
    );
}