import React from 'react';
import { Text, View } from './Themed';

interface ResultsProps {
  numberOfSides: number;
}

const Results: React.FC<ResultsProps> = ({ numberOfSides }) => {
  return (
    <View>
      <Text>{numberOfSides}-sided polygon</Text>
      <Text>pi-e: </Text>
      <Text>accuracy: </Text>
    </View>
  )
}

export default Results;