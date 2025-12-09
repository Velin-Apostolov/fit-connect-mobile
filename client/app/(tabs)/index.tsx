// client/app/(tabs)/index.tsx

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
// We don't typically need Link here, as the tabs handle main navigation

export default function DashboardScreen() {

    // A simple section to check basic layout and styles
    const TrainerNotification = () => (
        <View className="bg-white p-4 rounded-xl shadow-md border border-indigo-100 mb-6">
            <Text className="text-lg font-bold text-indigo-700 mb-1">
                Welcome to FitConnect!
            </Text>
            <Text className="text-gray-600 text-sm">
                You are currently viewing the main dashboard.
                Your next step is to find and connect with a personal trainer.
            </Text>
            <TouchableOpacity className="mt-3 bg-indigo-500 py-2 px-4 rounded-lg self-start">
                <Text className="text-white font-semibold">Find a Trainer</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <ScrollView className="flex-1 bg-gray-50 p-4">

            {/* SafeArea is handled by the overall tab layout, so we use a regular View */}
            <View className="pt-4">
                <Text className="text-3xl font-extrabold text-gray-900 mb-4">
                    👋 Your Dashboard
                </Text>

                {/* Trainer Connection Status */}
                <TrainerNotification />

                {/* Placeholder for Client Progress */}
                <View className="bg-white p-5 rounded-xl shadow-lg mb-6">
                    <Text className="text-xl font-semibold text-gray-800 mb-3">
                        Your Progress
                    </Text>
                    <View className="h-24 bg-gray-200 rounded-lg justify-center items-center">
                        <Text className="text-gray-500">
                            [Chart Placeholder: Calories/Workouts]
                        </Text>
                    </View>
                </View>

                {/* Placeholder for Next Workout */}
                <View className="bg-indigo-700 p-5 rounded-xl shadow-lg">
                    <Text className="text-xl font-semibold text-white mb-3">
                        Next Session:
                    </Text>
                    <Text className="text-white text-base">
                        Leg Day with Trainer Alex - Thursday, 7:00 PM
                    </Text>
                </View>

            </View>
        </ScrollView>
    );
}