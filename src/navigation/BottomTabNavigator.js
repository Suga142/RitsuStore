import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from "./ShopNavigator"
import CartNavigator from './CartNavigator';
import {COLORS} from "../constants/Colors"
import IonIcons from "@expo/vector-icons/Ionicons"
import OrdersNavigator from './OrdersNavigator';

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
    return(
        <BottomTabs.Navigator initialRouteName="ShopTab" screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
        }}>
            <BottomTabs.Screen name="ShopTab" component={ShopNavigator} options={{
                tabBarIcon: () => (
                    <View style={styles.icon}>
                        <IonIcons name="home" size={20} color={COLORS.tertiary} />
                        <Text style={styles.textCont}>Shop</Text>
                    </View>
                )
            }} />
            <BottomTabs.Screen name="CartTab" component={CartNavigator} options={{
                tabBarIcon: () => (
                    <View style={styles.icon}>
                        <IonIcons name="cart" size={20} color={COLORS.tertiary} />
                        <Text style={styles.textCont}>Cart</Text>
                    </View>
                )
            }} />
            <BottomTabs.Screen name="OrdersTab" component={OrdersNavigator} options={{
                tabBarIcon: () => (
                    <View style={styles.icon}>
                        <IonIcons name="list" size={20} color={COLORS.tertiary} />
                        <Text style={styles.textCont}>Orders</Text>
                    </View>
                )
            }} />
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: COLORS.darkColor,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,
        position: "absolute",
        borderRadius: 15,
        bottom: 20,
        left: 14,
        right: 8,
        height: 80,
        backgroundColor: COLORS.secondary,
    },

    icon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textCont: {
        color: COLORS.tertiary,
    },
})