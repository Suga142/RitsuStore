import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {
  const loaded = useFonts({TekoRegular: require("./src/assets/fonts/Teko-Regular.ttf")})

  if(!loaded) {
    return null
  }

  return <ShopNavigator/>

}
