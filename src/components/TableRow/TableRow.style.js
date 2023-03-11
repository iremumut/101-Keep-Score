import {StyleSheet} from 'react-native';
import AppStyles from '../../constants/AppStyles';

export default styles = StyleSheet.create({
  rowContainer: {
    //backgroundColor: 'yellow',
    width: '100%',
    paddingVertical: '2%',
    flexDirection: 'row',
    paddingRight: 5,
  },
  rowNumber: {
    color: AppStyles.color.white,
    fontSize: 14,
    backgroundColor: AppStyles.color.pink,
    width: 22,
    height: 22,
    textAlign: 'center',
    borderRadius: 50,
  },
  scoreText: {
    textAlign: 'center',
    paddingHorizontal: '5%',
    color: AppStyles.color.white,
    fontFamily: 'ReadexPro-Regular',
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0.01,
  },
});
