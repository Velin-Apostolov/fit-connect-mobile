import React, { useState } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { InputField } from '../../components/base/InputField'; // Adjust path as needed

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Logic to call your authService.login() function here
        console.log('Logging in with:', email, password);
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 justify-center items-center p-6">

                {/* Title */}
                <Text className="text-3xl font-bold text-indigo-700 mb-8">
                    Welcome to FitConnect
                </Text>

                {/* Input Fields */}
                <InputField
                    label="Email Address"
                    placeholder="your@email.com"
                    value={email}
                    onChangeText={setEmail}
                />
                <InputField
                    label="Password"
                    placeholder="********"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                {/* Login Button */}
                <TouchableOpacity
                    onPress={handleLogin}
                    className="w-full bg-indigo-600 h-12 rounded-lg justify-center items-center mt-6 shadow-md"
                >
                    <Text className="text-white text-lg font-semibold">
                        Log In
                    </Text>
                </TouchableOpacity>

                {/* Register/Link */}
                <View className="mt-8 flex-row">
                    <Text className="text-gray-600">Don't have an account? </Text>
                    <TouchableOpacity onPress={() => console.log('Navigate to Register')}>
                        <Text className="text-indigo-600 font-semibold">
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}