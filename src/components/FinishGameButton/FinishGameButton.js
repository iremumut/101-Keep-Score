import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './FinishGameButton.style';

const FinishGameButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Finish Game</Text>
    </TouchableOpacity>
  );
};

export default FinishGameButton;
