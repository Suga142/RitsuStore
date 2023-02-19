import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useSelector } from 'react-redux';

const DetailsScreen = ({navigation, route}) => {

  const productDetails = useSelector(state => state.products.selected)

  return (
    <View style={styles.container}>
      <Text>{productDetails.name}</Text>
      <Text>{productDetails.description}</Text>
      <Text>${productDetails.price}</Text>
      <Button title="Add to Cart" onPress={()=> console.log("Add to Cart")} />
    </View>
  );
}

export default DetailsScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});