import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from './Themed';

const Diagram = () => {
  return (
    <View>
      <View style={styles.circle} />
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    borderColor: "yellow",
    borderRadius: 50,
    borderWidth: 1,
    height: 100,
    width: 100,
  }
})

export default Diagram;