import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { CART } from '../data/Cart';
import CartItem from '../components/CartItem';
import { COLORS } from "../constants/Colors"

const CartScreen = () => {

  const total = 120;

  const handleConfirmCart = () => {
    console.log("confirm cart")
  }

  const handleDeleteItem = () => {
    console.log("delete item")
  }

  const renderCartItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  )

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList data={CART} renderItem={renderCartItem} keyExtractor={item => item.id} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default CartScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: COLORS.primary,
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: COLORS.darkColor,
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: COLORS.disableColor,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
  
});