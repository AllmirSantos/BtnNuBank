import React from "react";
import { StyleSheet, Text, View } from "react-native";

// import { Container } from './styles';

const Store = () => {
  return (
    <View style={styles.container}>
      <Text>Store</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
export default Store;
