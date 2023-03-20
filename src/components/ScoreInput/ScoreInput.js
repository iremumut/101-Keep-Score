import {Text, View, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './ScoreInput.style';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

const ScoreInput = ({name, index, score, saveScore}) => {
  const [newScore, setNewScore] = useState(score);

  return (
    <View style={styles.playerContainer}>
      <Text style={styles.playerName}>
        {name.length > 8 ? name.slice(0, 8).trim() + '..' : name}
      </Text>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="never">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <TextInput
            style={styles.playerInput}
            keyboardType="numeric"
            value={newScore}
            onTouchCancel={() => saveScore(newScore, index)}
            onChangeText={e => {
              if (e.startsWith(0)) {
                e = e.substring(1);
              }
              setNewScore(e);
            }}
            onEndEditing={() => saveScore(newScore, index)}
          />
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

export default ScoreInput;
