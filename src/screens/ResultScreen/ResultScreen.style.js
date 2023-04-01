import {StyleSheet} from 'react-native';
import AppStyles from '../../constants/AppStyles';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: '10%',
    marginBottom: '5%',
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
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: '3%',
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
    top: '35%',
    flexDirection: 'column',
    width: '45%',
  },
  winnerText: {
    color: AppStyles.color.white,
    fontFamily: 'Raleway-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 30,
    width: '100%',
  },
  newGameButton: {
    backgroundColor: AppStyles.color.white,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 40,
    position: 'absolute',
    alignSelf: 'center',
    bottom: '10%',
    alignItems: 'center',
  },
  newGameButtonText: {
    color: AppStyles.color.pink,
    fontFamily: 'Raleway-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
