import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {
  const loaded = useFonts({ TekoRegular: require("./src/assets/fonts/Teko-Regular.ttf") })

  if (!loaded) {
    return null
  }

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )

}
