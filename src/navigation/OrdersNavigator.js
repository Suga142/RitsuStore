import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {COLORS} from "../constants/Colors"
import OrdersScreen from "../screens/OrdersScreen";

const Stack = createNativeStackNavigator();

export default OrdersNavigator = () => {
    return (

        <Stack.Navigator initialRouteName="Orders" screenOptions={{
            headerStyle: { backgroundColor: COLORS.secondary },
            headerTintColor: COLORS.tertiary,
            headerTitleStyle: { fontWeight: "bold" },
        }} >
            <Stack.Screen name="Cart" component={OrdersScreen} options={{ title: "Orders" }} />
        </Stack.Navigator>

    )
}