import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { COLORS } from '../constants/Colors';

const CategoriesItem = ({ item, onSelected }) => {
  return (
    <View  style={{...styles.categoriesItem, ...{backgroundColor: item.color}}}>
      <TouchableOpacity style={styles.container}  onPress={() => onSelected(item)} >
        <View style={styles.textContainer}>
          <Text>{item.title}</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image style={styles.imgContainer} source={require({item.img})} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CategoriesItem;
const styles = StyleSheet.create({
  categoriesItem: {
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
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
  },
  textContainer: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    width: "50%",
    height: "100%",
    borderRadius: 10,
  },


});