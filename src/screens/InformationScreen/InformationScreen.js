import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InformationScreen = ({navigation}) => {
  return (
    <View>
      <Text>InformationScreen</Text>
      <Button onPress={() => navigation.push('Score')} title="Score" />
    </View>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({});
