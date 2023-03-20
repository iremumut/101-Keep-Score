import {StyleSheet} from 'react-native';
import AppStyles from '../../constants/AppStyles';

export default styles = StyleSheet.create({
  InputContainer: {
    borderColor: AppStyles.color.eggshell,
    borderWidth: 0.58,
    borderRadius: 25,
    minHeight: 50,
    paddingHorizontal: 5,
    flex: 1,
    marginVertical: '5%',
  },
  InputText: {
    fontFamily: 'ReadexPro-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    letterSpacing: 0.01,
    color: AppStyles.color.white,
    textAlign: 'center',
    flex: 1,
  },
});
