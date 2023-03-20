import {
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import styles from './BackgroundContainer.style';

const BackgroundContainer = ({background, children}) => {
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}>
      <SafeAreaView style={styles.background}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.background}>
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default BackgroundContainer;
