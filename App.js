import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  const loaded = useFonts({ TekoRegular: require("./src/assets/fonts/Teko-Regular.ttf") })

  if (!loaded) {
    return null
  }

  return (
    <Provider store={store} >
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>

  )

}
