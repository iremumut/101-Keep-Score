import {View, TouchableOpacity} from 'react-native';
import React, {useState, useContext} from 'react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import styles from './ScoreScreen.style';
import FinishGameButton from '../../components/FinishGameButton/FinishGameButton';
import {ScoreContext} from '../../context/scoreContext';
import ScoresTable from '../../components/ScoresTable/ScoresTable';
import {IconPlus} from '../../assets/icons';
import EnterScoreModal from '../../components/EnterScoreModal/EnterScoreModal';
import GoBackButton from '../../components/GoBackButton/GoBackButton';

const bg = require('../../assets/images/backgroundScore.png');

const ScoreScreen = ({navigation}) => {
  const [enterScoreModalVisible, setEnterScoreModalVisible] = useState(false);

  const {getWinners, scores} = useContext(ScoreContext);

  return (
    <ScoreContext.Consumer>
      {() => (
        <BackgroundContainer background={bg}>
          <View style={styles.container}>
            <GoBackButton navigation={navigation} />
            {scores.length > 0 ? (
              <FinishGameButton
                onPress={() => {
                  getWinners();
                  navigation.push('Result');
                }}
              />
            ) : null}
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
