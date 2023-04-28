import {TouchableOpacity, Text, View, FlatList, Image} from 'react-native';
import React, {useContext, useEffect} from 'react';
import styles from './ResultScreen.style';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import uuid from 'react-native-uuid';
import {ScoreContext} from '../../context/scoreContext';
import {useTranslation} from 'react-i18next';

const bg = require('../../assets/images/backgroundResult.png');
const trophy = require('../../assets/images/trophy.png');

const ResultScreen = ({navigation}) => {
  const {winners, clearWinners} = useContext(ScoreContext);

  const {t} = useTranslation();

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      console.log(e.data.action.type);
      if (e.data.action.type === 'GO_BACK' || e.data.action.type === 'POP') {
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
              <Text style={styles.title}>{t('ResultScreen.Winner')}</Text>
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
                      {fontSize: 25 - x.index * 5 < 12 ? 12 : 25 - x.index * 5},
                    ]}>
                    {x.item.name}
                  </Text>
                  <Text
                    style={[
                      styles.resultText,
                      {fontSize: 25 - x.index * 5 < 12 ? 12 : 25 - x.index * 5},
                    ]}>
                    {x.item.score}
                  </Text>
                </View>
              )}
            />

            <TouchableOpacity
              style={styles.newGameButton}
              onPress={() => {
                clearWinners();
                navigation.navigate('Information');
              }}>
              <Text style={styles.newGameButtonText}>
                {t('ResultScreen.NewGame')}
              </Text>
            </TouchableOpacity>
          </View>
        </BackgroundContainer>
      )}
    </ScoreContext.Consumer>
  );
};

export default ResultScreen;
