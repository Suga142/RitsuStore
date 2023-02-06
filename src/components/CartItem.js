import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import IonIcons from "@expo/vector-icons/Ionicons"
import {COLORS} from "../constants/Colors"

const CartItem = ({item, onDelete}) => {
    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.header}>{item.name}</Text>
            </View>
            <View style={styles.detail}>
                <View>
                    <Text>Quantity: {item.quantity}</Text>
                    <Text>${item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => console.log("remove from cart")}>
                    <IonIcons name="trash" size={24} color={COLORS.darkColor} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CartItem;
const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.secondary
    },
    header: {
        fontSize: 18,
    },
    detail: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",

    },
});