import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './FinishGameButton.style';

const FinishGameButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Finish Game</Text>
    </TouchableOpacity>
  );
};

export default FinishGameButton;
