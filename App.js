/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppAuthNavigator } from './src/navigator';
export default function App() {
  return (
    <NavigationContainer>
      <AppAuthNavigator/>
    </NavigationContainer>
  );
}