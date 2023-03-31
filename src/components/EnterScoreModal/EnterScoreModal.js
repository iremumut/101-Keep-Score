import {
  Text,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import styles from './EnterScoreModal.style';
import {ScoreContext} from '../../context/scoreContext';
import ScoreInput from '../ScoreInput/ScoreInput';
import {IconClose} from '../../assets/icons';

const EnterScoreModal = ({visible, close}) => {
  const {playerNames, playerCount, addScores} = useContext(ScoreContext);

  const [scores, setScores] = useState(Array(playerCount).fill(0));

  useEffect(() => {
    setScores(Array(playerCount).fill(0));
  }, [playerCount]);

  const saveScore = (e, index) => {
    const newScores = [...scores];
    newScores[index] = parseInt(e) ? parseInt(e) : 0;
    setScores(newScores);
  };

  return (
    <ScoreContext.Consumer>
      {() => (
        <View style={styles.backdrop}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
            keyboardShouldPersistTaps="never">
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
                  keyExtractor={(item, index) => index.toString()}
                  horizontal
                  scrollEnabled
                  contentContainerStyle={{
                    justifyContent: 'space-between',
                  }}
                  renderItem={x => (
                    <ScoreInput
                      name={x.item}
                      index={x.index}
                      score={scores[x.index]?.toString()}
                      saveScore={saveScore}
                    />
                  )}
                />
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => {
                    close();
                    addScores(scores);
                  }}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </ScrollView>
        </View>
      )}
    </ScoreContext.Consumer>
  );
};

export default EnterScoreModal;
