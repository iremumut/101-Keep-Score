import {View} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './PlayerNameInput.style';
import {TextInput} from 'react-native';
import {ScoreContext} from '../../context/scoreContext';

const PlayerNameInput = ({initialName, playerNumber}) => {
  const {changePlayerName} = useContext(ScoreContext);

  const [name, setName] = useState('');

  return (
    <ScoreContext.Consumer>
      {() => (
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.InputText}
            placeholderTextColor={'white'}
            keyboardDismissMode="none"
            value={name}
            placeholder={initialName}
            onChangeText={e => setName(e)}
            onEndEditing={() => {
              const trimedName = name.trim();
              if (trimedName.length !== 0) {
                changePlayerName(playerNumber, name);
              } else {
                setName(initialName);
              }
            }}
            multiline={false}
            numberOfLines={1}
            maxLength={12}
          />
        </View>
      )}
    </ScoreContext.Consumer>
  );
};

export default PlayerNameInput;
