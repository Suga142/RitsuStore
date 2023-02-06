import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

const DetailsScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>{route.params.name}</Text>
      <Button title="Go to categories" onPress={() => navigation.popToTop()} />
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