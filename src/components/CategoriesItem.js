import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { COLORS } from '../constants/Colors';

const CategoriesItem = ({ item, onSelected }) => {
  return (
    <View style={styles.categoriesItem}>
      <TouchableOpacity style={styles.container}>
        <View style={styles.textContainer}>
          <Text>Category Title</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image style={styles.imgContainer} source={require("../assets/img/mondstad.jpg")} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CategoriesItem;
const styles = StyleSheet.create({
  categoriesItem: {
    width: "100%",
    height: 130,
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
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
  },
  img: {
    width: 50,
    height: 50,
  }

});