import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {showToast} from "react-native-toast";
import {handleToastFromOutside} from "./helpers";

function Home(): JSX.Element {
  function handleToastInside(): void {
    showToast("HALO FROM INSIDE!")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleToastInside}>
        <Text style={styles.text}>Press me (inside)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleToastFromOutside}>
        <Text style={styles.text}>Press me (outside)</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#64B5F6",
    borderRadius: 8,
    alignSelf: "center"
  },
  text: {
    color: "#FFFFFF"
  }
})

export default Home;
