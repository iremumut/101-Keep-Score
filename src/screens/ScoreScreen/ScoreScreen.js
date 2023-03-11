import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import styles from './ScoreScreen.style';
import FinishGameButton from '../../components/FinishGameButton/FinishGameButton';
import {ScoreContext} from '../../context/scoreContext';
import {FlatList} from 'react-native';
import ScoresTable from '../../components/ScoresTable/ScoresTable';
import {IconPlus} from '../../assets/icons';
import EnterScoreModal from '../../components/EnterScoreModal/EnterScoreModal';

const bg = require('../../assets/images/backgroundScore.png');

const ScoreScreen = ({navigation}) => {
  const [enterScoreModalVisible, setEnterScoreModalVisible] = useState(false);

  return (
    <ScoreContext.Consumer>
      {() => (
        <BackgroundContainer background={bg}>
          <View style={styles.container}>
            <FinishGameButton
              onPress={() => {
                navigation.push('Result');
              }}
            />
            <ScoresTable />
            <TouchableOpacity onPress={() => setEnterScoreModalVisible(true)}>
              <IconPlus style={styles.plusIcon} />
            </TouchableOpacity>
            {enterScoreModalVisible ? (
              <EnterScoreModal
                visible={enterScoreModalVisible}
                close={() => setEnterScoreModalVisible(false)}
              />
            ) : null}
          </View>
        </BackgroundContainer>
      )}
    </ScoreContext.Consumer>
  );
};

export default ScoreScreen;
