import {Text, View, TextInput, ScrollView, Dimensions} from 'react-native';
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

      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
          style={styles.playerInput}
          keyboardType="numeric"
          value={newScore}
          onTouchCancel={() => saveScore(newScore, index)}
          onChangeText={e => {
            if (e.startsWith(0) && e.length !== 1) {
              e = e.substring(1);
            }
            let text = e.replace(/[^\d-]/g, '');
            if (text.includes('-')) {
              text = text[0] + text.substring(1).replace('-', '');
            }
            setNewScore(text);
          }}
          onEndEditing={() => {
            if (!newScore || newScore?.length !== 0) {
              saveScore(newScore, index);
            } else {
              setNewScore(score);
            }
          }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ScoreInput;
