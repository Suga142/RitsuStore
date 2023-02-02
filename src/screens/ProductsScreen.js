import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ProductsItem from '../components/ProductsItem';

const ProductsScreen = ({ navigation, route }) => {

  useEffect(() => {

  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.productsContainer}>
        <ProductsItem />
      </View>
    </View>
  );
}

export default ProductsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  productsContainer: {
    height: 150,
    width: 150,
  },
});