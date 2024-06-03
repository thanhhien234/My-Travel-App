import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name = "index"/>
      <Tabs.Screen name = "category"/>
      <Tabs.Screen name = "profile"/>
      <Tabs.Screen name = "bookmarks"/>
      <Tabs.Screen name = "search"/>
    </Tabs>
  );
}
