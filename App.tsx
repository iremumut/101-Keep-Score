// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import InformationScreen from './src/screens/InformationScreen/InformationScreen';
import ScoreScreen from './src/screens/ScoreScreen/ScoreScreen';
import ResultScreen from './src/screens/ResultScreen/ResultScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Information" component={InformationScreen} />
        <Stack.Screen name="Score" component={ScoreScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
