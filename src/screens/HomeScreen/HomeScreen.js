import {
  Button,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const bg = require('../../assets/images/backgroundHome.png');

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/backgroundHome.png')}
        resizeMode="cover"
        style={styles.background}>
        <Text style={styles.title}>101 Keep Score</Text>
        {/*<Button
          onPress={() => navigation.push('Information')}
          title="Information"
  />*/}

        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.push('Information')}>
          <Text>START</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'RedHatDisplay-Black',
    fontWeight: 900,
    fontStyle: 'normal',
    fontSize: 70,
    lineHeight: 100,
    color: '#FFFFFF',
    marginTop: 70,
    letterSpacing: 0.1,
    paddingHorizontal: 50,
  },
  startButton: {
    width: 100,
    height: 30,
    color: '#FFFFFF',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 12.36,
    lineHeight: 15,
    letterSpacing: 0.5,
  },
});
