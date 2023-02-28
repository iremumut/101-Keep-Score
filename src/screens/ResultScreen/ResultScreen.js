import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const bg = require('../../assets/images/backgroundHome.png');

const ResultScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/backgroundHome.png')}
        resizeMode="cover"
        style={styles.background}>
        <Text>ResultScreen</Text>
        <Button onPress={() => navigation.navigate('Home')} title="Home" />
      </ImageBackground>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
