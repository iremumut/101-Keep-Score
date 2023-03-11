import {View, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './PlayerNameInput.style';
import {TextInput} from 'react-native';
import {ScoreContext} from '../../context/scoreContext';

const PlayerNameInput = ({initialName, playerNumber}) => {
  const {changePlayerName} = useContext(ScoreContext);

  const [name, setName] = useState(initialName);

  return (
    <ScoreContext.Consumer>
      {() => (
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.InputText}
            keyboardDismissMode="none"
            value={name}
            onChangeText={e => setName(e)}
            onEndEditing={() => changePlayerName(playerNumber, name)}
            maxLength={20}
          />
        </View>
      )}
    </ScoreContext.Consumer>
  );
};

export default PlayerNameInput;
