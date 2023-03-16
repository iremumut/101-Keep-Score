import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import styles from './InformationScreen.style';
import {
  IconCheckboxChecked,
  IconCheckboxEmpty,
  IconTwoArrows,
  IconArrowRight,
} from '../../assets/icons';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import PlayerNameInput from '../../components/PlayerNameInput/PlayerNameInput';
import {ScoreContext} from '../../context/scoreContext';
import uuid from 'react-native-uuid';

const bg = require('../../assets/images/backgroundHome.png');

const InformationScreen = ({navigation}) => {
  const {playerCount, playerNames, isPartners, changePartners} =
    useContext(ScoreContext);
  const [partnerNameList, setPartnerNameList] = useState([]);

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
  }, [isPartners, playerNames]);

  return (
    <ScoreContext.Consumer>
      {() => (
        <View style={styles.container}>
          <BackgroundContainer background={bg}>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Enter Players Names</Text>
              <View style={styles.partnerSection}>
                <Text style={styles.partnerSectionText}>Partners ?</Text>
                <TouchableOpacity onPress={() => changePartners()}>
                  {isPartners ? <IconCheckboxChecked /> : <IconCheckboxEmpty />}
                </TouchableOpacity>
              </View>
              <View style={styles.nameInputSection}>
                {!isPartners ? (
                  <ScrollView>
                    <FlatList
                      data={[...playerNames]}
                      scrollEnabled={false}
                      keyExtractor={x => x}
                      scrollToOverflowEnabled
                      renderItem={x => (
                        <PlayerNameInput
                          initialName={x.item}
                          playerNumber={x.index}
                        />
                      )}
                    />
                  </ScrollView>
                ) : (
                  <FlatList
                    data={partnerNameList}
                    keyExtractor={x => x}
                    scrollEnabled={false}
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
              <Text style={styles.nextButtonText}>Next</Text>
              <IconArrowRight />
            </TouchableOpacity>
          </BackgroundContainer>
        </View>
      )}
    </ScoreContext.Consumer>
  );
};

export default InformationScreen;
