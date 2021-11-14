import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Form from "../components/Form";
import Diagram from "../components/Diagram";
import Results from "../components/Results";
import Triangle from "../components/Triangle";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [numberOfSides, setNumberOfSides] = useState(3);

  return (
    <View style={styles.container}>
      <Results numberOfSides={numberOfSides} />
      <Triangle numberOfSides={numberOfSides} />
      <Diagram numberOfSides={numberOfSides} />
      <Form numberOfSides={numberOfSides} setNumberOfSides={setNumberOfSides} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
