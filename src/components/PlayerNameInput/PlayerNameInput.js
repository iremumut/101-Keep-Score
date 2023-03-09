import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import styles from './PlayerNameInput.style';
import {TextInput} from 'react-native';
import {ScoreContext} from '../../context/scoreContext';

const PlayerNameInput = ({initialName, playerNumber}) => {
  const {changePlayerName} = useContext(ScoreContext);

  return (
    <ScoreContext.Consumer>
      {() => (
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.InputText}
            value={initialName}
            onChangeText={e => changePlayerName(playerNumber, e)}
          />
        </View>
      )}
    </ScoreContext.Consumer>
  );
};

export default PlayerNameInput;
