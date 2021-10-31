import React from 'react';
import Slider from '@react-native-community/slider';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

interface FormProps {
  numberOfSides: number;
  setNumberOfSides: (newNumber: number) => void;
}

const Form: React.FC<FormProps> = ({ numberOfSides, setNumberOfSides }) => {

  return (
    <View>
      <Slider 
      maximumValue={12}
      maximumTrackTintColor="white"
      minimumValue={3}
      onValueChange={setNumberOfSides}
      step={1}
      style={styles.slider}
      value={numberOfSides}
      />
      <Text>Number of Sides: {numberOfSides}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  slider: {
    width: 300
  }
})

export default Form;