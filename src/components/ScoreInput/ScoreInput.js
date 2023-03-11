import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './ScoreInput.style';

const ScoreInput = ({name, index, score, saveScore}) => {
  const [newScore, setNewScore] = useState(score);

  return (
    <View style={styles.playerContainer}>
      <Text style={styles.playerName}>{name}</Text>
      <TextInput
        style={styles.playerInput}
        keyboardType="numeric"
        returnKeyType={'next'}
        value={newScore}
        onChangeText={e => {
          if (e.startsWith(0)) {
            e = e.substring(1);
          }
          setNewScore(e);
        }}
        blurOnSubmit
        onEndEditing={() => saveScore(newScore, index)}
        onBlur={() => saveScore(newScore, index)}
      />
    </View>
  );
};

export default ScoreInput;
