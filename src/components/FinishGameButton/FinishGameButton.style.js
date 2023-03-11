import {StyleSheet} from 'react-native';
import AppStyles from '../../constants/AppStyles';

export default styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    borderColor: AppStyles.color.eggshell,
    borderWidth: 0.58,
    paddingVertical: 10,
    paddingHorizontal: 40,
    height: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: '5%',
    right: '5%',
  },
  text: {
    color: AppStyles.color.white,
    fontFamily: 'ReadexPro-Regular',
    fontWeight: '400',
    fontSize: 15,
    letterSpacing: 0.1,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
