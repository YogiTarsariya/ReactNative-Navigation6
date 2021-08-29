import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from "../components";
import { HomeScreen } from "../components";

const Stack = createNativeStackNavigator();

export default function AppAuthNavigator() {
     return(
          <Stack.Navigator initialRouteName={'LoginScreen'} >
          <Stack.Screen name={'LoginScreen'} component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name={'HomeScreen'} component={HomeScreen} options={{ headerShown: false }} />
     </Stack.Navigator>
     )
}