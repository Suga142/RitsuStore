import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { COLORS } from "../constants/Colors"

const ProductsItem = ({item, onSelected}) => {
    return (
        <TouchableOpacity style={{...styles.itemContainer, ...{backgroundColor: item.color}}} onPress={() => onSelected(item)} >
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={item.img} />
            </View>
            <View style={styles.textContainer}>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text>{item.price}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default ProductsItem;
const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        padding: 20,
        width: "100%",
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
    },
    img: {
        height: 200,
        width: "95%",
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
});