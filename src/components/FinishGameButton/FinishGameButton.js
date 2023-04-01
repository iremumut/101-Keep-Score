import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './FinishGameButton.style';
import {useTranslation} from 'react-i18next';

const FinishGameButton = ({onPress}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{t('ScoreScreen.FinishGame')}</Text>
    </TouchableOpacity>
  );
};

export default FinishGameButton;
