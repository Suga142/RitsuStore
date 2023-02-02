import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { COLORS } from "../constants/Colors"

const ProductsItem = () => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require("../assets/img/tanjiro.jpg")} />
            </View>
            <View style={styles.textContainer}>
                <Text>Name</Text>
                <Text>Description</Text>
                <Text>Price</Text>
            </View>
        </View>
    );
}

export default ProductsItem;
const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: COLORS.tertiary,
        borderRadius: 10,
        margin: 10,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
    },
    imgContainer: {
        height: "60%",
    },
    textContainer: {
        height: "40%",
    },
    img: {
        height: "100%",
        width: "100%"
    },
});