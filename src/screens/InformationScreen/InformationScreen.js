import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import styles from './InformationScreen.style';
import {
  IconCheckboxChecked,
  IconCheckboxEmpty,
  IconTwoArrows,
} from '../../assets/icons';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import PlayerNameInput from '../../components/PlayerNameInput/PlayerNameInput';
import {ScoreContext} from '../../context/scoreContext';
import uuid from 'react-native-uuid';

const bg = require('../../assets/images/backgroundHome.png');

const InformationScreen = ({navigation}) => {
  const {playerCount, playerNames, isPartners, changePartners} =
    useContext(ScoreContext);
  //const [isPartners, setIsPartners] = useState(false);
  const [partnerNameList, setPartnerNameList] = useState([]);

  useEffect(() => {
    if (isPartners) {
      const names = [];
      console.log(playerNames);
      for (let i = 0; i < playerCount - 2; i + 2) {
        const item = {
          firstPlayer: {index: i, name: playerNames[i]},
          secondPlayer: {index: i + 1, name: playerNames[i + 1]},
        };
        names.push(item);
      }
      setPartnerNameList(names);
      console.log(names);
    }
  }, [isPartners]);

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
                  <FlatList
                    data={[...playerNames]}
                    keyExtractor={x => uuid.v4()}
                    renderItem={x => (
                      <PlayerNameInput
                        initialName={x.item}
                        playerNumber={x.index}
                      />
                    )}
                  />
                ) : (
                  {
                    /*<View style={styles.partnersInputSection}>
                    <FlatList
                      data={partnerNameList}
                      keyExtractor={x => uuid.v4()}
                      renderItem={({item}) => (
                        <View style={styles.partnersInputsList}>
                          {console.log(x)}
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
                      </View>*/
                  }
                )}
              </View>
            </View>
            <Button onPress={() => navigation.push('Score')} title="Score" />
          </BackgroundContainer>
        </View>
      )}
    </ScoreContext.Consumer>
  );
};

export default InformationScreen;
