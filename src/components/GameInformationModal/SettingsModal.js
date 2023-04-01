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
import {useTranslation} from 'react-i18next';
const bg = require('../../assets/images/backgroundGameInformation.png');

const SettingsModal = ({visible, onClose}) => {
  const {
    playerCount,
    changePlayerCount,
    highestScoreWins,
    setHighestScoreWins,
  } = useContext(ScoreContext);

  const [count, setCount] = useState(playerCount);

  const {t} = useTranslation();

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
                      <Text style={styles.text}>
                        {t('InformationScreen.PlayerCount')}:{' '}
                      </Text>
                      <Text style={[styles.playerCountInput, styles.text]}>
                        {count}
                      </Text>
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
                            {t('InformationScreen.Highest')}
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
                            {t('InformationScreen.Lowest')}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <Text style={[styles.text, styles.scoreText]}>
                        {t('InformationScreen.ShouldWin')}
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
