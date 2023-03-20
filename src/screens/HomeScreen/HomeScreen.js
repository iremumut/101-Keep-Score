import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './HomeScreen.style';

import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';

const bg = require('../../assets/images/backgroundHome.png');

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackgroundContainer background={bg}>
        <Text style={styles.title}>101 Keep Score</Text>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.push('Information')}>
          <Text style={styles.startButtonText}>START</Text>
          <View style={styles.startButtonBorder} />
        </TouchableOpacity>
      </BackgroundContainer>
    </View>
  );
};

export default HomeScreen;
