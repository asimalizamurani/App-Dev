import React from "react";
import { StyleSheet, Text, View } from "react-native";

const index = () => {
  return (
    <View>
      <Text style={styles.text}>index</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "black",
    padding: 10,
    margin: 20,
    backgroundColor: "lightgray",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
  },
});
