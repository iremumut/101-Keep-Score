import {
  Text,
  View,
  Modal,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './SettingsModal.style';
import {IconArrowDown, IconArrowUp, IconClose} from '../../assets/icons';
import {ScoreContext} from '../../context/scoreContext';
const bg = require('../../assets/images/backgroundGameInformation.png');

const SettingsModal = ({visible, onClose}) => {
  const {
    playerCount,
    changePlayerCount,
    highestScoreWins,
    setHighestScoreWins,
  } = useContext(ScoreContext);

  const [count, setCount] = useState(playerCount);

  return (
    <ScoreContext.Consumer>
      {() => {
        return (
          <View style={styles.backdrop}>
            <Modal
              visible={visible}
              animationType="slide"
              transparent={true}
              avoidKeyboard={false}>
              <View style={styles.container}>
                <ImageBackground
                  source={bg}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 20.47}}
                  style={styles.backgroundImage}>
                  <View style={styles.contentContainer}>
                    <TouchableOpacity
                      style={styles.closeButton}
                      onPress={onClose}>
                      <IconClose />
                    </TouchableOpacity>
                    <View style={styles.contentRow}>
                      <Text style={styles.text}>Player Count: </Text>
                      <TextInput
                        style={[styles.playerCountInput, styles.text]}
                        keyboardType="numeric"
                        maxLength={1}
                        value={count.toString()}
                        onChangeText={e => {
                          setCount(e);
                          changePlayerCount(e);
                        }}
                        onEndEditing={() => changePlayerCount(count)}
                      />
                      <View>
                        <TouchableOpacity
                          style={styles.upDownButtons}
                          onPress={() => {
                            if (count + 1 < 10) {
                              setCount(count + 1);
                              changePlayerCount(count + 1);
                            }
                          }}>
                          <IconArrowUp style={styles.icon} />
                          <View style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.upDownButtons}
                          onPress={() => {
                            if (count - 1 > 0) {
                              setCount(count - 1);
                              changePlayerCount(count - 1);
                            }
                          }}>
                          <IconArrowDown />
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={styles.contentRow}>
                      <View>
                        <TouchableOpacity
                          style={[
                            styles.scoreButtons,
                            highestScoreWins ? null : styles.unSelectedBox,
                          ]}>
                          <Text
                            style={[
                              styles.text,
                              highestScoreWins ? null : styles.unSelectedBox,
                            ]}
                            onPress={() => setHighestScoreWins(true)}>
                            Highest
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles.scoreButtons,
                            highestScoreWins ? styles.unSelectedBox : null,
                          ]}
                          onPress={() => setHighestScoreWins(false)}>
                          <Text
                            style={[
                              styles.text,
                              highestScoreWins ? styles.unSelectedBox : null,
                            ]}>
                            Lowest
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <Text style={[styles.text, styles.scoreText]}>
                        score should win the game.
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </Modal>
          </View>
        );
      }}
    </ScoreContext.Consumer>
  );
};

export default SettingsModal;
