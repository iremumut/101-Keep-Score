import {TouchableOpacity} from 'react-native';
import React from 'react';
import {IconArrowLeft} from '../../assets/icons';
import {styles} from './GoBackButton.styles';

const GoBackButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.goBackButton}
      onPress={() => navigation.goBack()}>
      <IconArrowLeft />
    </TouchableOpacity>
  );
};

export default GoBackButton;
