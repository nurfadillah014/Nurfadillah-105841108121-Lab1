import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Kategori2 from './MyTabs';
import CartScreen from './MyTabs';
import FavoriteScreen from './FavoriteScreen';
import MyTabs from './MyTabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tabs" component={MyTabs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}