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
    textAlign: 'center',
  },
  rowNumberContainer: {
    backgroundColor: AppStyles.color.pink,
    width: 22,
    height: 22,
    borderRadius: 50,
  },
  scoreText: {
    textAlign: 'center',
    color: AppStyles.color.white,
    fontFamily: 'ReadexPro-Regular',
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0.01,
    marginHorizontal: 2,
    width: 74,
  },
  firstText: {
    marginLeft: 0,
    width: 69,
  },
  rowScores: {
    flexDirection: 'row',
    flex: 1,
  },
  deleteIcon: {
    width: 20,
  },
});
