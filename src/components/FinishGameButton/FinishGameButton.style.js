import {StyleSheet} from 'react-native';
import AppStyles from '../../constants/AppStyles';

export default styles = StyleSheet.create({
  container: {
    borderRadius: 12.87,
    borderColor: AppStyles.color.eggshell,
    borderWidth: 0.58,
    paddingVertical: 5,
    paddingHorizontal: 25,
    /* shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,*/
  },
  text: {
    color: AppStyles.color.white,
    fontFamily: 'ReadexPro-Regular',
    fontWeight: '400',
    fontSize: 15,
    letterSpacing: 0.1,
  },
});
