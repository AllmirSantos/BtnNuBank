import React from "react";
import { StyleSheet, Text, View } from "react-native";

// import { Container } from './styles';

const Money = () => {
  return (
    <View style={styles.container}>
      <Text>Money</Text>
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
export default Money;
