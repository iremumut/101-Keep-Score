import {StyleSheet} from 'react-native';
import AppStyles from '../../constants/AppStyles';

export default styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    width: '100%',
    paddingVertical: '2%',
    flexDirection: 'row',
    paddingLeft: 5,
  },
  rowNumber: {
    color: AppStyles.color.white,
    fontSize: 14,
    backgroundColor: AppStyles.color.pink,
    width: 22,
    height: 22,
    textAlign: 'center',
    borderRadius: 50,
    marginRight: '2%',
  },
  scoreText: {
    textAlign: 'left',
    paddingHorizontal: '3%',
    color: AppStyles.color.white,
    fontFamily: 'ReadexPro-Regular',
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0.01,
  },
  rowScores: {
    width: '100%',
    flexDirection: 'row',
  },
  deleteIcon: {
    flex: 0.2,
  },
});
