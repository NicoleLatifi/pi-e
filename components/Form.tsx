import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { StyleSheet, TextInput } from 'react-native';
import { Text, View } from './Themed';

const Form = () => {
  const [sliderValue, setSliderValue] = useState(3)

  const handleChange = (value: number) => {
    setSliderValue(value)
  }

  return (
    <View>
      <Slider 
      maximumValue={12}
      maximumTrackTintColor="white"
      minimumValue={3}
      onValueChange={handleChange}
      step={1}
      style={styles.slider}
      />
      <Text>Number of Sides: {sliderValue}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  slider: {
    width: 300
  }
})

export default Form;