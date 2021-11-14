import React from "react";
import Slider from "@react-native-community/slider";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

interface FormProps {
  numberOfSides: number;
  setNumberOfSides: (newNumber: number) => void;
}

const Form: React.FC<FormProps> = ({ numberOfSides, setNumberOfSides }) => {
  return (
    <View style={styles.sliderContainer}>
      <Slider
        maximumValue={100}
        maximumTrackTintColor="white"
        minimumValue={3}
        onValueChange={setNumberOfSides}
        step={1}
        style={styles.slider}
        value={numberOfSides}
      />
      <Text>Number of Sides: {numberOfSides}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: 300,
  },
  sliderContainer: {
    // TODO: style Slider to be at bottom of screen without effecting position of the rest of the content
    justifyContent: "flex-end",
    marginBottom: 30,
  },
});

export default Form;
