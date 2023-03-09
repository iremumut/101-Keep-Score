import {StyleSheet} from 'react-native';
import AppStyles from '../../constants/AppStyles';

export default styles = StyleSheet.create({
  InputContainer: {
    borderColor: AppStyles.color.eggshell,
    borderWidth: 0.58,
    borderRadius: 25,
    height: 50,
    paddingVertical: 6,
    paddingHorizontal: 18,
    marginVertical: '5%',
    /*shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,*/
  },
  InputText: {
    fontFamily: 'ReadexPro-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    letterSpacing: 0.01,
    color: AppStyles.color.white,
    textAlign: 'center',
  },
});
