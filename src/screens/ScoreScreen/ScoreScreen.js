import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ScoreScreen = ({navigation}) => {
  return (
    <View>
      <Text>ScoreScreen</Text>
      <Button onPress={() => navigation.push('Result')} title="Result" />
    </View>
  );
};

export default ScoreScreen;

const styles = StyleSheet.create({});
