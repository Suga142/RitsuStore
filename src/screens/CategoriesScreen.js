import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CategoriesItem from '../components/CategoriesItem';

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <CategoriesItem />
      </View>
      <Text>CategoriesScreen</Text>
      <Button title="Go to Products" onPress={() => navigation.navigate("Products")} color="turquoise" />
    </View>
  );
}

export default CategoriesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesContainer: {
    margin: 10,
    height: 200,
    width: 350,
  },
});