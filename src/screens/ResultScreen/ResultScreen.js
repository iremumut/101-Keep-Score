import {
  Button,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import React, {useContext} from 'react';
import styles from './ResultScreen.style';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import {IconTrophy} from '../../assets/icons';
import uuid from 'react-native-uuid';
import {ScoreContext} from '../../context/scoreContext';

const bg = require('../../assets/images/backgroundResult.png');
const trophy = require('../../assets/images/trophy.png');

const ResultScreen = ({navigation}) => {
  const {winners} = useContext(ScoreContext);

  return (
    <BackgroundContainer background={bg}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleCircle} />
          <Text style={styles.title}>Winner</Text>
        </View>
        <View style={styles.winnerSection}>
          <Image source={trophy} style={styles.winnerIcon} />
          <View style={[styles.winnerContainer]}>
            <Text
              style={styles.winnerText}
              lineBreakMode="tail"
              numberOfLines={5}>
              {winners[0].name}
            </Text>
            <Text style={styles.winnerText}>{winners[0].score}</Text>
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
              <Text style={[styles.resultText, {fontSize: 25 - x.index * 5}]}>
                {x.item.score}
              </Text>
            </View>
          )}
        />

        <View>
          <TouchableOpacity>
            <Text>New Game</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
    </BackgroundContainer>
  );
};

export default ResultScreen;
