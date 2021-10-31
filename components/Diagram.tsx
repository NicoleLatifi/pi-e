import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

interface DiagramProps {
  numberOfSides: number;
}

const Diagram:React.FC<DiagramProps> = ({ numberOfSides }) => {
  return (
    <View>
      <View style={styles.circle}>
        <Text style={styles.inside}>{numberOfSides}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    alignItems: "center",
    borderColor: "yellow",
    borderRadius: 150,
    borderWidth: 1,
    height: 300,
    justifyContent: "center",
    width: 300,
  },
  inside: {
    fontSize: 128,
  }
})

export default Diagram;