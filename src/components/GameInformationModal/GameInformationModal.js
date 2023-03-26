import {
  Text,
  View,
  Modal,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './GameInformationModal.style';
import {IconArrowDown, IconArrowUp} from '../../assets/icons';
const bg = require('../../assets/images/backgroundGameInformation.png');

const GameInformationModal = ({visible}) => {
  return (
    <View style={styles.backdrop}>
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        avoidKeyboard={false}>
        <View style={styles.container}>
          <ImageBackground
            source={bg}
            resizeMode="cover"
            imageStyle={{borderRadius: 20.47}}
            style={styles.backgroundImage}>
            <View style={styles.contentContainer}>
              <View style={styles.contentRow}>
                <Text style={styles.text}>Player Count: </Text>
                <TextInput
                  style={[styles.playerCountInput, styles.text]}
                  keyboardType="numeric"
                  maxLength={1}
                />
                <View>
                  <TouchableOpacity style={styles.upDownButtons}>
                    <IconArrowUp style={styles.icon} />
                    <View style={styles.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <IconArrowDown />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Modal>
    </View>
  );
};

export default GameInformationModal;
