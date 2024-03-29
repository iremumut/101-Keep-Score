import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import styles from './InformationScreen.style';
import {
  IconCheckboxChecked,
  IconCheckboxEmpty,
  IconTwoArrows,
  IconArrowRight,
  IconSettings,
} from '../../assets/icons';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import PlayerNameInput from '../../components/PlayerNameInput/PlayerNameInput';
import {ScoreContext} from '../../context/scoreContext';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import SettingsModal from '../../components/GameInformationModal/SettingsModal';
import {useTranslation} from 'react-i18next';

const bg = require('../../assets/images/backgroundHome.png');

const InformationScreen = ({navigation}) => {
  const {playerCount, playerNames, isPartners, changePartners} =
    useContext(ScoreContext);
  const [partnerNameList, setPartnerNameList] = useState([]);
  const [settingsModal, setSettingsModal] = useState(false);
  const {t} = useTranslation();

  useEffect(() => {
    if (isPartners) {
      const names = [];
      for (let i = 0; i <= playerCount - 2; i = i + 2) {
        const item = {
          firstPlayer: {index: i, name: playerNames[i]},
          secondPlayer: {index: i + 1, name: playerNames[i + 1]},
        };
        names.push(item);
      }
      setPartnerNameList(names);
    }
    // eslint-disable-next-line
  }, [isPartners, playerNames]);

  return (
    <ScoreContext.Consumer>
      {() => (
        <View style={styles.container}>
          <BackgroundContainer background={bg}>
            <GoBackButton navigation={navigation} />
            <TouchableOpacity
              onPress={() => setSettingsModal(true)}
              style={styles.settingsButton}>
              <IconSettings />
            </TouchableOpacity>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>
                {t('InformationScreen.EnterPlayersNames')}
              </Text>
              {playerCount % 2 !== 0 ? null : (
                <View style={styles.partnerSection}>
                  <Text style={styles.partnerSectionText}>
                    {' '}
                    {t('InformationScreen.Partners')}
                  </Text>
                  <TouchableOpacity onPress={() => changePartners()}>
                    {isPartners ? (
                      <IconCheckboxChecked />
                    ) : (
                      <IconCheckboxEmpty />
                    )}
                  </TouchableOpacity>
                </View>
              )}
              <View style={styles.nameInputSection}>
                {!isPartners ? (
                  <FlatList
                    data={[...playerNames]}
                    removeClippedSubviews={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={x => (
                      <PlayerNameInput
                        initialName={x.item}
                        playerNumber={x.index}
                      />
                    )}
                  />
                ) : (
                  <FlatList
                    data={partnerNameList}
                    keyExtractor={(item, index) => index.toString()}
                    removeClippedSubviews={false}
                    renderItem={({item}) => (
                      <View style={styles.partnersInputsList}>
                        <PlayerNameInput
                          initialName={item.firstPlayer.name}
                          playerNumber={item.firstPlayer.index}
                        />
                        <IconTwoArrows />
                        <PlayerNameInput
                          initialName={item.secondPlayer.name}
                          playerNumber={item.secondPlayer.index}
                        />
                      </View>
                    )}
                  />
                )}
              </View>
            </View>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => navigation.push('Score')}>
              <Text style={styles.nextButtonText}>
                {t('InformationScreen.Next')}
              </Text>
              <IconArrowRight />
            </TouchableOpacity>
            {settingsModal ? (
              <SettingsModal
                visible={settingsModal}
                onClose={() => setSettingsModal(false)}
              />
            ) : null}
          </BackgroundContainer>
        </View>
      )}
    </ScoreContext.Consumer>
  );
};

export default InformationScreen;
