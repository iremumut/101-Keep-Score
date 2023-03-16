import {Text, View, Modal, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './EnterScoreModal.style';
import {ScoreContext} from '../../context/scoreContext';
import uuid from 'react-native-uuid';
import ScoreInput from '../ScoreInput/ScoreInput';
import {IconClose} from '../../assets/icons';

const EnterScoreModal = ({visible, close}) => {
  const {playerNames, playerCount, addScores} = useContext(ScoreContext);

  const [scores, setScores] = useState(Array(playerCount).fill(0));
  const [scoreSaveCount, setScoreSaveCount] = useState(0);

  const saveScore = (e, index) => {
    setScoreSaveCount(scoreSaveCount + 1);
    const newScores = [...scores];
    newScores[index] = parseInt(e) ? parseInt(e) : 0;
    setScores(newScores);
  };

  return (
    <ScoreContext.Consumer>
      {() => (
        <View style={styles.backdrop}>
          <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            avoidKeyboard={false}>
            <View style={styles.container}>
              <TouchableOpacity style={styles.closeButton} onPress={close}>
                <IconClose />
              </TouchableOpacity>
              <FlatList
                data={playerNames}
                keyExtractor={x => x}
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
                style={[
                  styles.buttonContainer,
                  scoreSaveCount !== scores.length
                    ? {backgroundColor: '#A9A9A9'}
                    : null,
                ]}
                //disabled={scoreSaveCount !== scores.length}
                onPress={() => {
                  close();
                  addScores(scores);
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
