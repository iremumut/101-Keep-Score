import {View, Text} from 'react-native';
import React from 'react';
import styles from './PlayerNameInput.style';
import {TextInput} from 'react-native';

const PlayerNameInput = () => {
  return (
    <View style={styles.InputContainer}>
      <TextInput style={styles.InputText} />
    </View>
  );
};

export default PlayerNameInput;
