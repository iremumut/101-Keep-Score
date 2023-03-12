import {StyleSheet} from 'react-native';
import AppStyles from '../../constants/AppStyles';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  titleContainer: {
    //flex: 1,
    marginTop: '20%',
    marginBottom: '8%',
  },
  title: {
    color: AppStyles.color.white,
    fontFamily: 'Raleway-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 60,
  },
  titleCircle: {
    backgroundColor: AppStyles.color.pink,
    width: 80,
    height: 80,
    position: 'absolute',
    borderRadius: 50,
    top: -15,
    left: -45,
  },
  winnerSection: {
    flex: 1,
  },
  winnerIcon: {
    width: 230,
    height: 160,
    position: 'absolute',
    alignSelf: 'center',
  },
  resultContainer: {
    flexDirection: 'row',
    //width: '50%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: '5%',
    alignItems: 'center',
  },
  resultText: {
    color: AppStyles.color.white,
    fontFamily: 'ReadexPro-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
  },
  nameText: {
    marginRight: 25,
  },
  winnerContainer: {
    position: 'absolute',
    top: '45%',
    flexDirection: 'column',
  },
  winnerText: {
    color: AppStyles.color.white,
    fontFamily: 'Raleway-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 30,
  },
});
