import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import styles from './ScoreScreen.style';
import FinishGameButton from '../../components/FinishGameButton/FinishGameButton';

const bg = require('../../assets/images/backgroundScore.png');

const ScoreScreen = ({navigation}) => {
  return (
    <BackgroundContainer background={bg}>
      <View style={styles.container}>
        <FinishGameButton />
        <Text>ScoreScreen</Text>
        <Button onPress={() => navigation.push('Result')} title="Result" />
      </View>
    </BackgroundContainer>
  );
};

export default ScoreScreen;
