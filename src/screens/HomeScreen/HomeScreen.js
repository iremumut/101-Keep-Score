import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './HomeScreen.style';

import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import {useTranslation} from 'react-i18next';
import i18n from '../../../i18n';

const bg = require('../../assets/images/backgroundHome.png');

const HomeScreen = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <BackgroundContainer background={bg}>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() =>
            i18n.changeLanguage(t('HomeScreen.Language') === 'TR' ? 'en' : 'tr')
          }>
          <Text style={styles.languageText}>{t('HomeScreen.Language')}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{t('HomeScreen.Title')}</Text>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.push('Information')}>
          <Text style={styles.startButtonText}>{t('HomeScreen.Start')}</Text>
          <View style={styles.startButtonBorder} />
        </TouchableOpacity>
      </BackgroundContainer>
    </View>
  );
};

export default HomeScreen;
