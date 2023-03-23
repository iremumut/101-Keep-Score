import {View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import styles from './PlayerNameInput.style';
import {TextInput} from 'react-native';
import {ScoreContext} from '../../context/scoreContext';

const PlayerNameInput = ({initialName, playerNumber}) => {
  const {changePlayerName} = useContext(ScoreContext);

  const [name, setName] = useState(initialName);

  useEffect(() => {
    setName(initialName);
  }, [initialName]);

  return (
    <ScoreContext.Consumer>
      {() => (
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.InputText}
            keyboardDismissMode="none"
            value={name}
            onChangeText={e => setName(e)}
            onEndEditing={() => {
              if (name.length !== 0) {
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
