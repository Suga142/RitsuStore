import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import OrderItem from '../components/OrderItem';
import { ORDERS } from '../data/Orders';

const OrdersScreen = () => {

  const renderOrderItem = ({item}) => (
    <OrderItem item={item} onDelete= {() => console.log("on delete")} />
  )

  return (
    <FlatList data={ORDERS} renderItem={renderOrderItem} keyExtractor={item => item.id} />
  );
}

export default OrdersScreen;
const styles = StyleSheet.create({
  
});
