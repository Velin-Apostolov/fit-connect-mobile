// client/app/_layout.tsx (UPDATED to include SafeAreaProvider)
import { Stack } from 'expo-router';
import '../global.css';
// 🛑 IMPORT THE PROVIDER
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function RootLayout() {
    const isAuthenticated = false; // For now, we assume not logged in

    return (
        // 🛑 WRAP THE ENTIRE APP IN SafeAreaProvider
        <SafeAreaProvider>
            <Stack>
                {isAuthenticated ? (
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                ) : (
                    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                )}
            </Stack>
        </SafeAreaProvider>
    );
}