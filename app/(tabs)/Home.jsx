import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Home</Text>
      <Text style={styles.font1}>Home</Text>
      <Text style={styles.font2}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  font: {
    fontSize: 40,
    fontFamily: " outfit",
  },
  font1: {
    fontSize: 40,
    fontFamily: "outfit-midium",
  },
  font2: {
    fontSize: 40,
    fontFamily: "utregularfit",
  },
});
