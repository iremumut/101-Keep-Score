import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './ScoreInput.style';

const ScoreInput = ({name, index, score, saveScore}) => {
  const [newScore, setNewScore] = useState(score);

  return (
    <View style={styles.playerContainer}>
      <Text style={styles.playerName}>{name}</Text>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
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
          onEndEditing={() => Promise.all([saveScore(newScore, index)])}
          onBlur={() => saveScore(newScore, index)}
        />
      </ScrollView>
    </View>
  );
};

export default ScoreInput;
