import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './EnterScoreModal.style';
import {ScoreContext} from '../../context/scoreContext';
import uuid from 'react-native-uuid';
import ScoreInput from '../ScoreInput/ScoreInput';

const EnterScoreModal = ({visible, close}) => {
  const {playerNames, playerCount, addScores} = useContext(ScoreContext);

  const [scores, setScores] = useState(Array(playerCount).fill(0));

  const saveScore = (e, index) => {
    console.log(e);
    const newScores = [...scores];
    newScores[index] = parseInt(e) ? parseInt(e) : 0;
    setScores(newScores);
  };

  return (
    <ScoreContext.Consumer>
      {() => (
        <View style={styles.backdrop}>
          <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={styles.container}>
              <FlatList
                data={playerNames}
                keyExtractor={x => uuid.v4()}
                horizontal
                contentContainerStyle={{
                  justifyContent: 'space-between',
                  flex: 1,
                }}
                renderItem={x => (
                  <ScoreInput
                    name={x.item}
                    index={x.index}
                    score={scores[x.index].toString()}
                    saveScore={saveScore}
                  />
                )}
              />
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                  addScores(scores);
                  close();
                }}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      )}
    </ScoreContext.Consumer>
  );
};

export default EnterScoreModal;
