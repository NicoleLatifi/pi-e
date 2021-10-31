import React from 'react';
import { Text, View } from './Themed';

interface ResultsProps {
  numberOfSides: number;
}

const Results: React.FC<ResultsProps> = ({ numberOfSides }) => {
  return (
    <>
      <Text>{numberOfSides}-sided polygon</Text>
      <Text>pi-e: </Text>
      <Text>accuracy: </Text>
    </>
  )
}

export default Results;