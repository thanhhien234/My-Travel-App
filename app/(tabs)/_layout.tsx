import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: Colors.bgColor,
        borderTopWidth: 0,
        padding: 0
      },
      tabBarShowLabel: false,
      tabBarInactiveTintColor: "#999",
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" color={ color } size={25} />   //props color: icon's color to be dynamically controlled
          )
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="funnel" color={ color } size={25} />
          )
        }} />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                backgroundColor: Colors.primaryColor,
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: 50,
                height: 50,
              }}
            >
              <Ionicons name="search-outline" size={24} color={Colors.white} />
            </View>
          )
        }} />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmark" color={ color } size={25} />
          )
        }} />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={ color } size={25} />
          )
        }} />
    </Tabs>
  );
}
