import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './BackgroundContainer.style';

const BackgroundContainer = ({background, children}) => {
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}>
      {children}
    </ImageBackground>
  );
};

export default BackgroundContainer;
