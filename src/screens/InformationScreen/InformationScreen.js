import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './InformationScreen.style';
import {IconCheckboxChecked, IconCheckboxEmpty} from '../../assets/icons';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import PlayerNameInput from '../../components/PlayerNameInput/PlayerNameInput';
const bg = require('../../assets/images/backgroundHome.png');

const InformationScreen = ({navigation}) => {
  const [isPartners, setIsPartners] = useState(false);

  return (
    <View style={styles.container}>
      <BackgroundContainer background={bg}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Enter Players Names</Text>
          <View style={styles.partnerSection}>
            <Text style={styles.partnerSectionText}>Partners ?</Text>
            <TouchableOpacity onPress={() => setIsPartners(!isPartners)}>
              {isPartners ? <IconCheckboxChecked /> : <IconCheckboxEmpty />}
            </TouchableOpacity>
          </View>
          <View style={styles.nameInputSection}>
            <PlayerNameInput />
          </View>
        </View>
        <Button onPress={() => navigation.push('Score')} title="Score" />
      </BackgroundContainer>
    </View>
  );
};

export default InformationScreen;
