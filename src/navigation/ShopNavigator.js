import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ProductsScreen from "../screens/ProductsScreen";
import {COLORS} from "../constants/Colors"

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Categories" screenOptions={{
                    headerStyle: {backgroundColor: COLORS.secondary },
                    headerTintColor: COLORS.tertiary,
                    headerTitleStyle: {fontWeight: "bold"},
                }} >
                <Stack.Screen name="Categories" component={CategoriesScreen} options={{title: "Ritsu Store"}} />
                <Stack.Screen name="Products" component={ProductsScreen} options={({route}) => ({
                    title: route.params.title,
                })} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
