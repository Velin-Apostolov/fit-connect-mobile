// client/app/(auth)/_layout.tsx
import { Stack } from 'expo-router';

export default function AuthLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            {/* The router automatically finds 'login' and 'register'.
        You don't need Stack.Screen definitions unless you want 
        to set specific options (like title) on them. 
        
        Since they are simple, we often just leave this empty 
        or define only the screens where we need custom options. 
        
        If you want to ensure the order, you can list them without 
        duplicating entries that already exist as files.
      */}
            {/* If you have a 'register.tsx' file, remove its Stack.Screen entry here */}

            {/* Example: Defining the 'login' screen to set a title, even if it's already found */}
            <Stack.Screen name="login" options={{ title: "Sign In" }} />

            {/* If you have 'register.tsx' in the same folder, you likely DON'T need this line: */}
            {/* <Stack.Screen name="register" options={{ title: "Sign Up" }} /> */}
        </Stack>
    );
}