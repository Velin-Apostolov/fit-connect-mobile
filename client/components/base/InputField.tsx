import React from 'react';
import { TextInput, Text, View } from 'react-native';

interface InputFieldProps {
    label: string;
    placeholder: string;
    secureTextEntry?: boolean;
    value: string;
    onChangeText: (text: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
    label,
    placeholder,
    secureTextEntry = false,
    value,
    onChangeText
}) => {
    return (
        <View className="mb-4 w-full">
            <Text className="text-sm font-semibold text-gray-700 mb-1">{label}</Text>
            <TextInput
                className="w-full h-12 border border-gray-300 rounded-lg px-4 bg-white text-base text-gray-800 focus:border-indigo-500"
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#9ca3af"
            />
        </View>
    );
};