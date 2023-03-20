import {TouchableOpacity, Text, View, FlatList, Image} from 'react-native';
import React, {useContext, useEffect} from 'react';
import styles from './ResultScreen.style';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import uuid from 'react-native-uuid';
import {ScoreContext} from '../../context/scoreContext';

const bg = require('../../assets/images/backgroundResult.png');
const trophy = require('../../assets/images/trophy.png');

const ResultScreen = ({navigation}) => {
  const {winners, clearWinners} = useContext(ScoreContext);

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      if (e.data.action.type === 'GO_BACK') {
        e.preventDefault();
      }
    });
  }, []);

  return (
    <ScoreContext.Consumer>
      {() => (
        <BackgroundContainer background={bg}>
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <View style={styles.titleCircle} />
              <Text style={styles.title}>Winner</Text>
            </View>
            <View style={styles.winnerSection}>
              <Image source={trophy} style={styles.winnerIcon} />
              <View style={styles.winnerContainer}>
                <Text style={styles.winnerText}>{winners[0]?.name}</Text>
                <Text style={styles.winnerText}>{winners[0]?.score}</Text>
              </View>
            </View>

            <FlatList
              data={winners.slice(1, winners.length)}
              keyExtractor={x => uuid.v4()}
              contentContainerStyle={{marginTop: '20%'}}
              renderItem={x => (
                <View style={styles.resultContainer}>
                  <Text
                    style={[
                      styles.resultText,
                      styles.nameText,
                      {fontSize: 25 - x.index * 5},
                    ]}>
                    {x.item.name}
                  </Text>
                  <Text
                    style={[styles.resultText, {fontSize: 25 - x.index * 5}]}>
                    {x.item.score}
                  </Text>
                </View>
              )}
            />

            <TouchableOpacity
              style={styles.newGameButton}
              onPress={() => {
                clearWinners();
                navigation.navigate('Home');
              }}>
              <Text style={styles.newGameButtonText}>New Game</Text>
            </TouchableOpacity>
          </View>
        </BackgroundContainer>
      )}
    </ScoreContext.Consumer>
  );
};

export default ResultScreen;
